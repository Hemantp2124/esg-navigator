import pandas as pd
from io import BytesIO

async def process_file(file):
    content = await file.read()
    if file.filename.endswith('.csv'):
        df = pd.read_csv(BytesIO(content))
    elif file.filename.endswith('.xlsx'):
        df = pd.read_excel(BytesIO(content))
    else:
        raise ValueError("Unsupported file type")
    # Validate required columns
    required = ['activityType', 'value', 'unit', 'date']
    if not all(col in df.columns for col in required):
        raise ValueError("Missing required columns")
    # Normalize units (placeholder)
    # df['value'] = df.apply(normalize_unit, axis=1)
    # Return dict
    return df.to_dict('records')

def normalize_unit(row):
    # Placeholder normalization
    return row['value']
