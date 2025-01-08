import { z, defineCollection } from "astro:content";

const blog = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        link: z.string(),
        publishedDate: z.date(),
        draft: z.boolean(),
        autor: z.string(),
        image: z.string()
    })
})

export const collections = {
    blog,
}