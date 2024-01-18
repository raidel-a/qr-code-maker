import axios from 'axios';
import { Figtree } from 'next/font/google';
import Head from 'next/head';
import { useState } from 'react';
import SVG from 'react-inlinesvg';

const font = Figtree({ subsets: ['latin'] });

export default function Home() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const createQRCode = async () => {
    try {
      const res = await axios.get('/api/helloQR', {
        params: { input },
      });
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const downloadQRcode = () => {
    const url = window.URL.createObjectURL(new Blob([response]));
    const urlObject = document.createElement('a');
    urlObject.href = url;
    urlObject.setAttribute('download', 'file.svg');
    document.body.appendChild(urlObject);
    urlObject.click();
  };

  return (
    <body className={font.className}>
      <div id="comma">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 25 220 95"
          preserveAspectRatio="xMidYMid meet"
          onclick="window.open('https://github.com/raihven')"
        >
          <g
            fill="rgb(0,55,75)"
            transform="translate(0.000000,145.000000) scale(0.1,-0.1)"
          >
            <path
              d="M0 760 l0 -690 205 0 205 0 0 205 0 206 68 -3 67 -3 135 -202 135
-202 233 -1 c127 0 232 3 232 8 -1 4 -72 110 -159 237 l-159 230 47 26 c25 15
70 52 99 83 91 96 128 207 119 356 -14 238 -169 392 -435 430 -37 5 -230 10
-429 10 l-363 0 0 -690z m747 311 c49 -23 73 -62 73 -123 0 -53 -28 -101 -72
-125 -27 -14 -63 -18 -185 -21 l-153 -4 0 146 0 146 148 0 c123 0 154 -4 189
-19z"
              onClick={() => window.open('https://github.com/raihven')}
            />
            <path
              d="M1485 860 c-119 -36 -229 -145 -256 -252 -14 -57 -8 -86 27 -127 35
-42 89 -43 126 -3 42 44 41 87 -3 137 -28 31 -30 39 -21 60 14 31 68 65 102
65 14 0 39 -9 56 -19 30 -18 84 -80 84 -95 0 -5 -35 -58 -78 -120 -93 -131
-99 -141 -111 -194 -13 -60 4 -122 46 -171 45 -53 80 -71 139 -71 97 0 198 82
231 186 14 45 19 52 34 43 55 -29 154 9 202 78 32 46 32 51 8 83 -18 23 -21
23 -38 9 -39 -35 -63 -41 -88 -25 -13 8 -73 86 -133 173 -106 153 -155 209
-197 231 -32 15 -97 22 -130 12z m244 -409 c28 -41 51 -82 51 -90 -1 -35 -40
-101 -72 -121 -49 -30 -81 -26 -116 15 -57 64 -50 130 24 241 43 64 37 66 113
-45z"
              onClick={() => window.open('https://github.com/raihven')}
            />
          </g>
        </svg>
      </div>
      <div className="flex flex-col place-content-center relative inter bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-black to-slate-800 items-center min-h-screen border-t-8 border-gray-900">
        <Head>
          <title>QR Code Creator</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="text-7xl font-black text-cyan-900">
          /QR-Code<span className="text-slate-500 font-bold">Creator</span>
        </h1>
        <h2 className="text-slate-300 text-2xl mt-2">
          Create a QR Code to share text or a link
        </h2>

        <input
          type="text"
          placeholder="Feed me (link or text please)"
          className="mt-6 w-1/2 p-4 rounded text-slate-700"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button
          className="mt-6 p-4 bg-slate-700 transition hover:opacity-90 hover:scale-105 active:scale-95 rounded text-slate-300 font-bold text-lg inline-flex"
          onClick={() => createQRCode()}
        >
          Create
        </button>

        {response && (
          <div className="mt-12">
            <SVG src={response} />
            <button
              className="bg-slate-700 w-full transition text-neutral-300 text-xl p-3 rounded-b hover:rounded hover:opacity-90 hover:scale-105 font-bold active:scale-95"
              onClick={() => downloadQRcode()}
            >
              Save
            </button>
          </div>
        )}
      </div>
    </body>
  );
}
