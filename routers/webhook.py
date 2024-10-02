from fastapi import APIRouter, Request
from fastapi.responses import JSONResponse

router = APIRouter()

@router.post("/webhook")
async def dialogflow_webhook(request: Request):
    req_data = await request.json()

    # Extract intent and parameters
    intent = req_data["queryResult"]["intent"]["displayName"]
    parameters = req_data["queryResult"].get("parameters", {})

    # Handle different intents
    if intent == "GetMenu":
        response_text = "Our menu includes Multigrain Wraps, Protein Smoothies, and more."
    elif intent == "PlaceOrder":
        item = parameters.get("item", "something")
        response_text = f"Your order for {item} has been placed!"
    else:
        response_text = "Sorry, I didn't understand that."

    # Return the response to Dialogflow
    return JSONResponse({
        "fulfillmentText": response_text
    })
