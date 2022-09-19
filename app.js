const express = require('express');

const articlesRoutes = require("./routes/articles_routes")
const eventsRoutes = require("./routes/event_routes")
const associationRoutes = require("./routes/association_routes")
const newsRoutes = require("./routes/news_routes")
const paiement_donRoutes = require("./routes/paiement_don_routes")
const paiement_eventRoutes = require("./routes/paiement_event_routes")
const paiement_achatRoutes = require("./routes/paiement_achat_routes")

const documentsRoutes = require("./routes/documents_routes")
const reseauxRoutes = require("./routes/reseaux_routes")
const price_eventRoutes = require("./routes/price_event_routes")
const price_achatRoutes = require("./routes/price_achat_routes")
const achatRoutes = require("./routes/achat_routes")

const supportRoutes = require("./routes/support_routes")
const donsRoutes = require("./routes/dons_routes")
const userRoutes = require("./routes/user_routes")
const imageRoutes = require("./routes/image_routes")






const connexion = require("./database/connexion");

const app = express();




app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.ALLOW_ORIGIN);
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})

app.use(express.json());


app.use('/api/articles', articlesRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/associations', associationRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/paiement_don', paiement_donRoutes);
app.use('/api/paiement_event', paiement_eventRoutes);
app.use('/api/paiement_achat', paiement_achatRoutes);
app.use('/api/achat', achatRoutes);
app.use('/api/document', documentsRoutes);
app.use('/api/reseaux', reseauxRoutes);
app.use('/api/dons', donsRoutes);
app.use('/api/price_event', price_eventRoutes);
app.use('/api/price_achat', price_achatRoutes);
app.use('/api/support', supportRoutes);
app.use('/api/user', userRoutes);
app.use('/api/images', imageRoutes);





app.use((req, res, next) => {
    res.status(404).send("404")
})




module.exports = app;