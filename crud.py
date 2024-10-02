from sqlalchemy.orm import Session
from . import models

# Cart-related CRUD operations
def add_to_cart(db: Session, user: str, item_id: int, quantity: int):
    cart_item = db.query(models.CartItem).filter(models.CartItem.item_id == item_id, models.CartItem.user == user).first()
    if cart_item:
        cart_item.quantity += quantity
    else:
        cart_item = models.CartItem(user=user, item_id=item_id, quantity=quantity)
        db.add(cart_item)
    db.commit()
    return cart_item

def get_cart_items(db: Session, user: str):
    return db.query(models.CartItem).filter(models.CartItem.user == user).all()

def clear_cart(db: Session, user: str):
    db.query(models.CartItem).filter(models.CartItem.user == user).delete()
    db.commit()

# Contact form-related CRUD operations
def submit_contact_form(db: Session, name: str, message: str):
    contact_message = models.ContactMessage(name=name, message=message)
    db.add(contact_message)
    db.commit()
    return contact_message
