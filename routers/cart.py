from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import crud, models, database

router = APIRouter()

@router.post("/cart/add")
def add_to_cart(user: str, item_id: int, quantity: int, db: Session = Depends(database.get_db)):
    return crud.add_to_cart(db, user=user, item_id=item_id, quantity=quantity)

@router.get("/cart")
def view_cart(user: str, db: Session = Depends(database.get_db)):
    return crud.get_cart_items(db, user=user)

@router.delete("/cart/clear")
def clear_cart(user: str, db: Session = Depends(database.get_db)):
    crud.clear_cart(db, user=user)
    return {"message": "Cart cleared"}
