{

  "type": "object",

  "properties": {

    "riskLevel": { "type": "string", "enum": ["Low", "Medium", "High"] },

    "summary": { "type": "string" },

    "explanation": { "type": "string" },

    "redFlags": { "type": "array", "items": { "type": "string" } },

    "manipulationTechnique": { "type": "string" },

    "safeNextSteps": { "type": "string" },

    "saferVersion": { "type": "string" },

    "followUpQuestion": { "type": "string" }

  },

  "required": ["riskLevel", "summary", "explanation", "redFlags", "manipulationTechnique", "safeNextSteps", "saferVersion", "followUpQuestion"]

}