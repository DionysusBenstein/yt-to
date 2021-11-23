import express from 'express';
import ytdl from 'ytdl-core';
import { transliterate as tr} from 'transliteration';

const app = express();

app.get('/info', async (req, res) => {
    const info = await ytdl.getBasicInfo(req.query.url);

    res.send({
        title: info.videoDetails.title,
        thumbnail: info.videoDetails.thumbnails.pop()
    });
});

app.get('/download/mp4', async (req, res) => {
    const url = req.query.url;
    const videoInfo = await ytdl.getBasicInfo(req.query.url);
    const { title } = videoInfo.videoDetails;

    res.header('Content-Disposition', `attachment; filename="${tr(title)}.mp4"`);
    ytdl(url, { format: 'mp4' }).pipe(res);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});