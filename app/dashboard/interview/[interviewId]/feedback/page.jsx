'use client'

import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
  
const Feedback = ({ params }) => {

    const [feedbackList, setFeedbackList] = useState([]);
    const router = useRouter();

    useEffect(() => {
        GetFeedback();
    }, [])

    const GetFeedback = async () => {
        const result = await db.select()
        .from(UserAnswer)
        .where(eq(UserAnswer.mockIdRef, params.interviewId))
        .orderBy(UserAnswer.id);

        console.log(result);
        setFeedbackList(result);
    }

    return (
        <div className='p-10'>
            

            {
                feedbackList?.length == 0?
                <h2 className='font-bold text-xl mb-2 text-gray-500'>No interview feedback record founded</h2>
                :
                <>
                    <h2 className='text-3xl font-bold text-green-500'>Congratulations!</h2>
                    <h2 className='font-bold text-2xl mt-2'>Here's your interview feedback</h2>
                    <h2 className='text-sm text-gray-500 mt-3'>Find below interview question with correct answer, your answer and feedback for improvement</h2>
                    { feedbackList && feedbackList.map((item, index) => (
                        <Collapsible key={index} className='mt-7'>
                            <CollapsibleTrigger className='p-2 w-full bg-secondary rounded-lg my-2 text-left flex justify-between gap-7'>{item.question} <ChevronsUpDown className='h-5 w-5' /></CollapsibleTrigger>
                            <CollapsibleContent>
                                <div className='flex flex-col gap-2'>
                                    <h2 className='text-red-500 p-2 border rounded-lg'>Rating: <strong>{item.rating}</strong></h2>
                                    <h2 className='p-2 border rounded-lg bg-red-50 text-sm text-red-900'><strong>Your Answer: </strong>{item.userAns}</h2>
                                    <h2 className='p-2 border rounded-lg bg-green-50 text-sm text-green-900'><strong>Correct Answer: </strong>{item.correctAns}</h2>
                                    <h2 className='p-2 border rounded-lg bg-blue-50 text-sm text-primary'><strong>Feedback: </strong>{item.feedback}</h2>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    
                    ))}
                </>
            }

            <Button className='mt-5' onClick={() => router.replace('/dashboard')}>Go Home</Button>

        </div>
    )
}

export default Feedback
