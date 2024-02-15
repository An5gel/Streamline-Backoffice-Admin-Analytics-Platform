import { useState } from 'react'
import reactLogo from './assets/react.svg'


import './App.css'
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div><PowerBIEmbed
      embedConfig={{
        type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
        id:"519c9242-710e-481e-b1d5-70c834b4cc68",
     embedUrl: "https://app.powerbi.com/reportEmbed?reportId=3a9dc67d-9a95-4213-ba05-c1b21993ca4c&groupId=d4cbbf8a-c53d-44b0-b984-19ca93141c9c&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLU5PUlRILUVVUk9QRS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWUsImRpc2FibGVBbmd1bGFySlNCb290c3RyYXBSZXBvcnRFbWJlZCI6dHJ1ZX19",
        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImtXYmthYTZxczh3c1RuQndpaU5ZT2hIYm5BdyIsImtpZCI6ImtXYmthYTZxczh3c1RuQndpaU5ZT2hIYm5BdyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNDJhZjk5YzYtNWE5Ni00ZDRkLWFmNDgtMzMxN2RhYzg4ZGIwLyIsImlhdCI6MTcwNzkwNTE5OCwibmJmIjoxNzA3OTA1MTk4LCJleHAiOjE3MDc5MDkwOTgsImFpbyI6IkUyTmdZQ2p5bkxTYWUyT2gwUUplenl1aC9jSXFBQT09IiwiYXBwaWQiOiIyODg3NDZhMS1kZWVkLTRjYTEtODA3OC1kMjQ4MzRhNWJjZGMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80MmFmOTljNi01YTk2LTRkNGQtYWY0OC0zMzE3ZGFjODhkYjAvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiJhOGU2YWM5Yi0wMzJjLTRiMDYtOTFiZC1mYWFjYTJjODAyYmEiLCJyaCI6IjAuQVlJQXhwbXZRcFphVFUydlNETVgyc2lOc0FrQUFBQUFBQUFBd0FBQUFBQUFBQUNDQUFBLiIsInN1YiI6ImE4ZTZhYzliLTAzMmMtNGIwNi05MWJkLWZhYWNhMmM4MDJiYSIsInRpZCI6IjQyYWY5OWM2LTVhOTYtNGQ0ZC1hZjQ4LTMzMTdkYWM4OGRiMCIsInV0aSI6Il9oUUVldzItTEUtMDNDS1dSSzlJQUEiLCJ2ZXIiOiIxLjAifQ.I5_oZ6OSH3W28N1Wq5d3luI0MGPi09JhffpK_lg7AtKwtWGt9HOQV_w65i9lZdnBRDMPrIloSzMp3tQXDqaUh2sToCLE8EiwRlXfVv8xY0iz0RhYyjkAxjNcGII86Nh_I4ub63HgnidHLY5B8xdF4UoE-NooAFEYjtJ73xmW8mNizfwBO_YbcsloCCn6CHaNZET0htX6MGtXDKsCuDAqZc0ivC3vZNMGnbpKq8wd3FuuTwa4DtLzDCN-kDJCINZLBlJ1xEDGuRdUtZzAga2SZ0mAr1FaAz-ZALzn4eZPtKV_YiSn2uUI64ItMHZCBZSZkyMTdrHnffMHV2slfIOXIg',
        tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
        settings: {
          panes: {
            filters: {
              expanded: false,
              visible: false
            }
          },
          background: models.BackgroundType.Transparent,
        }
      }}

      eventHandlers={
        new Map([
          ['loaded', function () { console.log('Report loaded'); }],
          ['rendered', function () { console.log('Report rendered'); }],
          ['error', function (event) { console.log(event.detail); }],
          ['visualClicked', () => console.log('visual clicked')],
          ['pageChanged', (event) => console.log(event)],
        ])
      }

      cssClassName={"reportClass"}

      getEmbeddedComponent={(embeddedReport) => {
        window.report = embeddedReport;
      }}
    />
    </div>
    // <div>
    //   <iframe title="STREAMLINE demo files (1)" width="1140" height="700" src="https://app.powerbi.com/reportEmbed?reportId=519c9242-710e-481e-b1d5-70c834b4cc68&autoAuth=true&ctid=42af99c6-5a96-4d4d-af48-3317dac88db0" frameborder="0" allowFullScreen="true"></iframe>
    // </div>
    

  )
}

export default App
