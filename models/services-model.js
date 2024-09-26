const mongoose = require('mongoose')

const servicesSchema = mongoose.Schema({
    lienImgServicePrin: {
        type: String,
        required: true,
    },
    nomService: {
        type: String,
        required: true,
    },
    descriptionService: {
        type: String,
        required: true,
    },
    plusInfoService: {
        lienImgServicesSecond: [
            {
                type: String,
                required: true,
            },
        ],
        plusDescriptionService: {
            type: String,
            required: true,
        },
    },
},

{
    timestamps: true
});

module.exports = mongoose.model("Services", servicesSchema);
