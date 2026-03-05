import { z } from 'zod'

export const emissionSchema = z.object({
  activityType: z.string().min(1, 'Activity type is required'),
  quantity: z.number().positive('Quantity must be positive'),
  unit: z.string().min(1, 'Unit is required'),
  date: z.string().min(1, 'Date is required'),
  facilityId: z.string().min(1, 'Facility is required'),
})
