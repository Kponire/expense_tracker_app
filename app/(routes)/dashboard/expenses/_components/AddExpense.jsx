import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Budgets, Expenses } from '@/utils/Schema';
import { db } from '@/utils/dbConfig';
import { Loader } from 'lucide-react';
import moment from 'moment';
import React, {useState} from 'react'
import { toast } from 'sonner';

const AddExpense = ({budgetId, user, refreshData}) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);
    
    const addNewExpense = async () => {
        setLoading(true);
        const result = await db.insert(Expenses).values({
            name:name,
            amount:amount,
            budgetId:budgetId,
            createdAt:moment().format('DD/MM/yyy')
        }).returning({insertedId:Budgets.id});
        setAmount('');
        setName('');
        if (result) {
            setLoading(false);
            refreshData()
            toast('New Expenses Added!!');
        }
        setLoading(false);
    }
  return (
    <div className='border p-5 rounded-lg'>
        <h2 className='font-bold text-lg'> Add Expense </h2>
        <div className='mt-2'>
            <h2 className='text-black font-medium my-1'>Expense Name</h2>
            <Input value={name} placeholder="e.g Home Decor" onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className='mt-2'>
            <h2 className='text-black font-medium my-1'>Expense Amount</h2>
            <Input type='number' value={amount} placeholder="e.g $5000" onChange={(e) => setAmount(e.target.value)} />
        </div>
        <Button onClick={() => addNewExpense()} disabled={!(name&&amount)||loading} className='mt-3 w-full'>
            {loading ?
                <Loader className='animate-spin' /> : "Add New Expense"
            }  
        </Button>
    </div>
  )
}

export default AddExpense