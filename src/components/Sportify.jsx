import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const spotifyData = [
  { "name": "TITLE IDOL", "duration_min": 4.47, "popularity": 16 },
  { "name": "How Far I'll Go", "duration_min": 2.72, "popularity": 67 },
  { "name": "Amor en el Cielo", "duration_min": 5.26, "popularity": 16 },
  { "name": "90's Type of Luv", "duration_min": 3.09, "popularity": 17 },
  { "name": "Hardstyle", "duration_min": 3.92, "popularity": 0 },
  { "name": "Work Out", "duration_min": 3.08, "popularity": 8 },
  { "name": "My math teacher likes technical death metal", "duration_min": 1.0, "popularity": 18 },
  { "name": "Popcorn", "duration_min": 2.09, "popularity": 29 },
  { "name": "Kinetic Hotel", "duration_min": 1.73, "popularity": 0 },
  { "name": "Malay", "duration_min": 5.13, "popularity": 6 },
  { "name": "Housewife Radio", "duration_min": 3.8, "popularity": 50 },
  { "name": "Through The Darkness - Mixed", "duration_min": 3.15, "popularity": 37 },
  { "name": "Movie", "duration_min": 3.48, "popularity": 49 },
  { "name": "The Gospel Truth I / Main Titles - Hercules", "duration_min": 2.43, "popularity": 54 },
  { "name": "British Grenadiers", "duration_min": 1.74, "popularity": 26 },
  { "name": "Heavy Metal Drummer", "duration_min": 3.15, "popularity": 39 },
  { "name": "Blues", "duration_min": 2.5, "popularity": 16 },
  { "name": "Bossa Nova Jazz", "duration_min": 2.32, "popularity": 4 },
  { "name": "Brazilera", "duration_min": 3.07, "popularity": 50 },
  { "name": "FLOWER", "duration_min": 2.89, "popularity": 66 },
  { "name": "Grindcore", "duration_min": 1.19, "popularity": 0 },
  { "name": "Brazil", "duration_min": 4.21, "popularity": 19 },
  { "name": "Electron", "duration_min": 3.58, "popularity": 38 },
  { "name": "Grindcore", "duration_min": 0.6, "popularity": 0 },
  { "name": "Blues Run the Game", "duration_min": 3.53, "popularity": 49 },
  { "name": "Liki Tiki - Reggae Remix", "duration_min": 4.17, "popularity": 42 },
  { "name": "Acoustic", "duration_min": 1.05, "popularity": 10 },
  { "name": "French Vol.1 04", "duration_min": 2.85, "popularity": 15 },
  { "name": "Deep House Ibiza", "duration_min": 2.45, "popularity": 11 },
  { "name": "Work Out", "duration_min": 2.64, "popularity": 26 },
  { "name": "Queencard", "duration_min": 2.69, "popularity": 71 },
  { "name": "Yo Voy (feat. Daddy Yankee)", "duration_min": 3.87, "popularity": 73 },
  { "name": "Rank10 + Let U Kno (Death Metal)", "duration_min": 3.46, "popularity": 17 },
  { "name": "Strength - Drum and Bass Instrumental", "duration_min": 1.46, "popularity": 19 },
  { "name": "Edmonton 2", "duration_min": 2.73, "popularity": 28 },
  { "name": "Alternative Baby", "duration_min": 2.95, "popularity": 21 },
  { "name": "Heavy Metal", "duration_min": 4.02, "popularity": 22 },
  { "name": "British", "duration_min": 3.15, "popularity": 43 },
  { "name": "Mischievous Metal Intro", "duration_min": 0.95, "popularity": 0 },
  { "name": "Summer Sixteen", "duration_min": 3.37, "popularity": 49 },
  { "name": "Folks Who Live On A Hill", "duration_min": 3.82, "popularity": 45 },
  { "name": "Forró em Goiânia", "duration_min": 2.2, "popularity": 20 },
  { "name": "TRANCE", "duration_min": 1.9, "popularity": 30 },
  { "name": "Ambient Thunder", "duration_min": 2.07, "popularity": 54 },
  { "name": "Early Summer", "duration_min": 3.25, "popularity": 24 },
  { "name": "Industrial Disease", "duration_min": 5.84, "popularity": 30 },
  { "name": "Aşkın Sırrı Bilinmez", "duration_min": 2.06, "popularity": 33 },
  { "name": "Circle 29", "duration_min": 2.98, "popularity": 33 },
  { "name": "Grooveshop - damaa.beats Remix", "duration_min": 2.2, "popularity": 42 },
  { "name": "Just The Two Of Us", "duration_min": 2.67, "popularity": 33 },
  { "name": "Fragments", "duration_min": 3.46, "popularity": 14 },
  { "name": "Disconnected", "duration_min": 3.24, "popularity": 54 },
  { "name": "Summer Love", "duration_min": 4.22, "popularity": 61 },
  { "name": "Guitarra Triste", "duration_min": 2.72, "popularity": 22 },
  { "name": "Dub", "duration_min": 4.28, "popularity": 4 },
  { "name": "TANGO", "duration_min": 2.42, "popularity": 25 },
  { "name": "To Age Ba Man bashi - Persian Music", "duration_min": 4.95, "popularity": 26 },
  { "name": "Funk", "duration_min": 3.31, "popularity": 29 },
  { "name": "JEALOUSY DIE SLOW", "duration_min": 2.84, "popularity": 19 },
  { "name": "Once There Was a Hushpuppy", "duration_min": 6.54, "popularity": 24 },
  { "name": "idm", "duration_min": 1.82, "popularity": 1 },
  { "name": "POETIC PIT", "duration_min": 4.67, "popularity": 33 },
  { "name": "INDUSTRIAL RHYTHM - Original Mix", "duration_min": 4.46, "popularity": 11 },
  { "name": "Three Little Birds", "duration_min": 3.0, "popularity": 75 },
  { "name": "Funky For You - Live", "duration_min": 6.33, "popularity": 15 },
  { "name": "POWER POP", "duration_min": 3.54, "popularity": 1 },
  { "name": "Love You Bad (feat. Malaya & Phoelix)", "duration_min": 2.25, "popularity": 45 },
  { "name": "Tears", "duration_min": 5.58, "popularity": 30 },
  { "name": "Happy Face", "duration_min": 2.83, "popularity": 67 },
  { "name": "Brazil", "duration_min": 3.05, "popularity": 43 },
  { "name": "Kids", "duration_min": 2.77, "popularity": 33 },
  { "name": "German", "duration_min": 2.85, "popularity": 56 },
  { "name": "Galat Bande", "duration_min": 3.85, "popularity": 34 },
  { "name": "Trance (TikTok Version) [I move so far in time]", "duration_min": 3.15, "popularity": 20 },
  { "name": "The Indian", "duration_min": 1.26, "popularity": 50 },
  { "name": "Funky Town", "duration_min": 2.62, "popularity": 52 },
  { "name": "Sleeping Upside Down", "duration_min": 3.07, "popularity": 61 },
  { "name": "Country", "duration_min": 2.65, "popularity": 29 },
  { "name": "Hip Hop Junkies", "duration_min": 3.49, "popularity": 33 },
  { "name": "Turkish March but Phonk", "duration_min": 2.19, "popularity": 26 },
  { "name": "Emo", "duration_min": 2.33, "popularity": 21 },
  { "name": "MP5", "duration_min": 2.67, "popularity": 49 },
  { "name": "Malaysian Flt 370, Pt. 3", "duration_min": 3.18, "popularity": 18 },
  { "name": "Up2You", "duration_min": 3.25, "popularity": 21 },
  { "name": "Black Metal", "duration_min": 3.42, "popularity": 26 },
  { "name": "Movies", "duration_min": 1.93, "popularity": 38 },
  { "name": "For You", "duration_min": 5.37, "popularity": 36 },
  { "name": "s.A.D", "duration_min": 3.97, "popularity": 33 },
  { "name": "Super Lady", "duration_min": 2.54, "popularity": 69 },
  { "name": "Dance in Rain", "duration_min": 3.85, "popularity": 55 },
  { "name": "Plastic Pop", "duration_min": 2.95, "popularity": 27 },
  { "name": "Chill", "duration_min": 4.54, "popularity": 35 },
  { "name": "Go Back", "duration_min": 4.39, "popularity": 17 },
  { "name": "Iran", "duration_min": 3.84, "popularity": 22 },
  { "name": "French", "duration_min": 2.13, "popularity": 17 },
  { "name": "Don't You Worry Child", "duration_min": 6.72, "popularity": 55 },
  { "name": "french", "duration_min": 2.73, "popularity": 23 },
  { "name": "Estampes, L. 100: 1. Pagodes - Pt. 2", "duration_min": 1.6, "popularity": 3 },
  { "name": "Shot", "duration_min": 6.35, "popularity": 27 },
  { "name": "Afrobeat - Radio Mix", "duration_min": 3.82, "popularity": 0 }
];


const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-xl max-w-[200px]">
        <p className="text-slate-100 font-bold mb-1 text-sm truncate">{data.name}</p>
        <p className="text-emerald-400 text-xs">Length: {data.duration_min} mins</p>
        <p className="text-cyan-400 text-xs">Popularity: {data.popularity}/100</p>
      </div>
    );
  }
  return null;
};

const SpotifyChart = () => {
  return (
    <div className="w-full h-full min-h-[250px] flex flex-col p-2">
      <div className="flex justify-between items-center mb-2 px-2">
        <h5 className="text-slate-300 text-sm font-semibold">Does Song Length Affect Popularity?</h5>
      </div>
      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 10, right: 20, bottom: 30, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis 
              type="number" 
              dataKey="duration_min" 
              stroke="#64748b" 
              tick={{ fill: '#64748b', fontSize: 11 }}
              domain={[0, 10]} 
              label={{ value: 'Duration (Mins)', position: 'insideBottom', offset: -5, fill: '#64748b', fontSize: 12 }}
            />
            <YAxis 
              type="number" 
              dataKey="popularity" 
              stroke="#64748b" 
              tick={{ fill: '#64748b', fontSize: 11 }}
              domain={[0, 100]}
              label={{ value: 'Popularity', angle: -90, position: 'insideLeft', offset: 10, fill: '#64748b', fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3', stroke: '#334155' }} />
            <Scatter name="Tracks" data={spotifyData} fill="#34d399" opacity={0.8} />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SpotifyChart;