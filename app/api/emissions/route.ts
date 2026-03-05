import { NextRequest, NextResponse } from 'next/server';

// Mock emissions data - replace with database queries
const mockEmissions = [
  {
    id: '1',
    date: '2024-12-01',
    category: 'Transportation',
    amount: 1102,
    unit: 'tCO2e',
    location: 'Headquarters',
    facility: 'Main Office',
    supplier: 'Transport Co.',
    scope: '3',
  },
  {
    id: '2',
    date: '2024-12-01',
    category: 'Energy',
    amount: 735,
    unit: 'tCO2e',
    location: 'Manufacturing Plant',
    facility: 'Plant A',
    scope: '2',
  },
  {
    id: '3',
    date: '2024-12-01',
    category: 'Supply Chain',
    amount: 367,
    unit: 'tCO2e',
    location: 'Warehouse',
    facility: 'Distribution Center',
    supplier: 'Supplier X',
    scope: '3',
  },
];

export async function GET(request: NextRequest) {
  try {
    // TODO: Add authentication check
    // TODO: Add database query

    return NextResponse.json(mockEmissions);
  } catch (error) {
    console.error('Error fetching emissions:', error);
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

    // TODO: Validate input
    // TODO: Save to database

    // Mock response
    const newEmission = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(newEmission, { status: 201 });
  } catch (error) {
    console.error('Error creating emission:', error);
    return NextResponse.json(
      { error: 'Failed to create emission' },
      { status: 500 }
    );
  }
}
