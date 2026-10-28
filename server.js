// Servidor Express - Projeto #15: Locadora de Veículos Elétricos
require('dotenv').config();
const express = require('express');
const supabase = require('./src/config/supabaseClient');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3015;

app.get('/api/locadora/status', (req, res) => {
    res.status(200).json({
        projeto_numero: 15,
        sistema: "Locadora de Veículos Elétricos",
        categoria: "Mobilidade Sustentável",
        tabela_conectada: process.env.TABELA_ALVO || "frota_eletrica",
        parametro_ambiente: process.env.ESTACAO_RECARGA || "ELETROPOSTO_CENTRAL_15",
        ponte_supabase_ativa: Boolean(supabase && supabase.rest),
        cofre_env_protegido: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
    });
});

app.listen(PORT, () => {
    console.log(`🚀 [PROJETO #15] Locadora de Veículos Elétricos rodando em http://localhost:${PORT}/api/locadora/status`);
});