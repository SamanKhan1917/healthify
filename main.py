from fastapi import FastAPI
from .database import Base, engine
from .routers import cart, contact, webhook

# Initialize the database
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Include the routers
app.include_router(cart.router, prefix="/cart", tags=["Cart"])
app.include_router(contact.router, prefix="/contact", tags=["Contact"])
app.include_router(webhook.router, prefix="/webhook", tags=["Webhook"])

@app.get("/")
def root():
    return {"message": "Welcome to Healthify's backend!"}
