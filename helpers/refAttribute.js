const {Reference} = require("../models")

const referenceAllAttribute =  Object.keys(Reference.rawAttributes).filter(att => !(att === "id" || att === "createdAt" || att === "updatedAt") )
const referenceModelAttributes = referenceAllAttribute.filter(att => !att.includes("Id"))
const referenceAssociationAttributes = referenceAllAttribute.filter(att=> att.includes("Id"))

module.exports = {
  referenceAllAttribute, referenceModelAttributes, referenceAssociationAttributes
}