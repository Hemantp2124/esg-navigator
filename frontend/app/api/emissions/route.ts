import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    // TODO: Add authentication check
    const emissions = await prisma.emission.findMany({
      include: {
        user: true, // Include user data if needed
      },
    });

    return NextResponse.json(emissions);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch emissions' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // TODO: Add authentication check
    const body = await request.json();

    // TODO: Add input validation
    const emission = await prisma.emission.create({
      data: {
        ...body,
        userId: 'default-user', // Default user for testing
        date: new Date(body.date), // Ensure date is DateTime
      },
    });

    return NextResponse.json(emission, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create emission' },
      { status: 500 }
    );
  }
}
