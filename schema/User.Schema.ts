import * as z from 'zod'

export const UserSchema = z.object({
    id: z.number(),
    company: z.string(),
    userName: z.string(),
    email: z.string(),
    address: z.string(),
    zip: z.string(),
    state: z.string(),
    country: z.string(),
    phone: z.string(),
    photo: z.string().optional(),
})

