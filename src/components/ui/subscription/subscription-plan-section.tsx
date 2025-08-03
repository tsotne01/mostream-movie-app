'use client'
import { useState } from 'react'
import SubscriptionCard from './subscription-card'

function SubscriptionPlanSection() {
    const [selectedPlan, setSelectedPlan] = useState<number | null>(null)
    return (
        <div className='grid grid-cols-2 gap-4 w-full mx-auto max-w-7xl mb-32'>
            {Array.from({ length: 4 }).map((_, index) => (
                <button onClick={() => setSelectedPlan(index === selectedPlan ? null : index)} key={index}>
                    <SubscriptionCard
                        selected={selectedPlan === index}
                        title={`1 Year - All Device ${index + 1}`}
                        price="$12.99"
                        subscriptionSpan="month"
                        description="Access to all premium movies and shows."

                    />
                </button>
            ))}
        </div>
    )
}

export default SubscriptionPlanSection