def get_dashboard_config(schema):
    if schema == "employee":
        return [
            {
                "type": "bar",
                "x": "department",
                "y": "count",
                "title": "Employees by Department"
            },
            {
                "type": "bar",
                "x": "department",
                "y": "salary",
                "agg": "avg",
                "title": "Average Salary by Department"
            }
        ]

    if schema == "sales":
        return [
            {
                "type": "line",
                "x": "date",
                "y": "revenue",
                "title": "Revenue Over Time"
            },
            {
                "type": "bar",
                "x": "region",
                "y": "revenue",
                "title": "Revenue by Region"
            }
        ]

    return []
