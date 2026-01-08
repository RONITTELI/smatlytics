def detect_schema(columns):
    cols = [c.lower() for c in columns]

    if "revenue" in cols or "sales" in cols:
        return "sales"

    if "salary" in cols or "department" in cols:
        return "employee"

    return "generic"
