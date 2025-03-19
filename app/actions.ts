"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function handleSubmission(formdata: FormData){
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    if(!user) {
        return redirect('/api/auth/register')
    }
    const title = formdata.get('title');
    const content = formdata.get('content');
    const url = formdata.get('url');

    await prisma.blogPost.create({
        data: {
            title: title as string,
            content: content as string,
            imageUrl: url as string,
            authorId: user.id,
            authorImage: user.picture as string,
            authorName: user.given_name as string,
        }
    });
    revalidatePath('/')
    return redirect("/dashboard")
}