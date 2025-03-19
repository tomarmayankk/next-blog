import { handleSubmission } from '@/app/actions'
import SubmitButton from '@/components/general/SubmitButton'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

function CreateBlogroute() {
  return (
    <div className='max-w-lg mx-auto'>
        <Card>
            <CardHeader>
                <CardTitle>Create Post</CardTitle>
                <CardDescription>Create a Post to share with the world</CardDescription>
            </CardHeader>
            <CardContent>
                <form action={handleSubmission} className='flex flex-col gap-4' >
                    <div className='flex flex-col gap-2'>
                        <Label>Title</Label>
                        <Input name='title' required type='text' placeholder='Title' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label>Content</Label>
                        <Input name='content' required placeholder='Content' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label>Image Url</Label>
                        <Input name='url' required type='url' />
                    </div>
                    <SubmitButton/>
                </form>
            </CardContent>
        </Card>
    </div>
  )
}

export default CreateBlogroute