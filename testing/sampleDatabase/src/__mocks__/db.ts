
// import { vi } from "vitest";

// export const prismaClient = {
//     cal : {
//         create : vi.fn()
//     }
// }

import { PrismaClient } from "@prisma/client";
import {mockDeep} from 'vitest-mock-extended'

export const prismaClient = mockDeep<PrismaClient>();


// mocking folder usi directory ke level mai create karna hai jis mock karna hai 
