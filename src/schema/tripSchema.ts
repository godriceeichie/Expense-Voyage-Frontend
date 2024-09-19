import { z } from 'zod'

export const flightSchema = z.object({
    destination: z.string({required_error: 'Destination is required'}).trim()
    .min(3, {message: 'Destination cannot be less that one'}),
    location: z.string({required_error: 'Location is required'}).trim()
    .min(3, {message: 'Location cannot be less that one'}),
    max: z.number(),
    date: z.date()
})