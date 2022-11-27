import express from 'express';
const router =express.Router();

import {createContact,getContact,getContacts,updateContact,deleteContact} from '../controllers/contact.js'
 

router.get("/",getContacts);
router.get("/:id", getContact);
router.post("/",createContact);
router.patch("/:id", updateContact);
router.delete("/:id", deleteContact);

export default router;
