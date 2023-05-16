import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='aplication'>
        <h1>
          <img
            className='aplication__Logo'
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAACXBIWXMAAAsTAAALEwEAmpwYAAADcklEQVR4nO2cSWgVQRCGv7hjxGiMokZRTy4gXtwCelKJV/WgB0/GKC4gyUU0oka8CRIRL4qeNLjgSdSTnsQIEYwgYogQNzTixQXMnpGGevIYumfevMzLVKB/qEv4u7r6Ty81NT0PPEaNmcAeoAVoBe5mZK0Sw26JacwwGWgCfgGBMjMxnQQmlVqECuCpggHH2ROJtSSYCDxWMMhC7ZHEnDoOKhhcUtuftggTgE8KBpbUPgJlaQqxQcGgirV1aQpxQMGAVCyPJkcnz4CdwNaMbQfw3BGjiT01nLF08BuYhR6YWP5Y4jSxl1SIdvShPQshXqAPJiYvBF6I//AzQuCFEHghBF4IgRdC4IXIUoiX6EMmmWUvsBQ9mJ3Vs0YAfAHqFTx97gLaHDGOiRDBODAvBF4I/IzALw1U7hFDcqIUwv0pFscbEZ/D42WzbAMWSbtVQGfEwBrknYmxRvmbjfsOWCk+F0cclWqEGAAWhtqud3BvWvq55eCuDfGqgUHNQnRZ2pr/dp+Fe9jCPWLh9YmPMLo0CzFkSbs3O7j3LP3cd3A3hXjLpC+1QgRAR956rgE+RHDPAtPEmiN43cDGvH2nQ/seEYReABXC63MsndH4VCVEoMS8EHgh8DMCZUvjtmSKcXeuvslpYayngDtRxued8bJHHAu1bXHwvgLz83gLRBgb92LIZ4N2IX5Y7ixVOJIf2wWOUxbekOUiaZn0pVaIHkvbGY7nguMW7gkLb1B8hIX4rlmIAKgLtT3v4JmMszKPVym34GzccyGf9dqXRiD1gqvAvgI2tm7ZABtjUvHcBmx8XktYk/AJFV4I/IzALw3U7hHDBfJGImqVxfpUIUSnFFHMBy7bI7LFQLJOc2zOAS5F8EwWWis+ayIKwmqEGAaWh9puc3AfWPp56OBuCfFWJJgdqoq3/RauKdSOpnj7XrMQ/cDcUNs1Du51Sz83HNzVId48h7hqhAjke6oqaWcq2q8jlpHJFHOoi5jupli7RHhVCb8rS1WI0wk6zt2meSMvfOK4n8XieAPiszdhLCb21HA0YeeazPYiqWjUKhhQsWauFqWGqUo/eI0z85Z9CimjWcHAgiz3hxzKgVcKBleomZNmOiVCdcRxqMne5h23JUM5cAH4q2DAtvrmlVJ+F26DeVDaq+BnE4xdBg5ZLql4kBD/AHfdmdITQ1bXAAAAAElFTkSuQmCC'
          />
          Calculadora
        </h1>
        <div className='display'>Esto es un texto</div>
        <div className='memoryControl'>
          <button className='memoryControl__Button memory-Control__clear'>
            CE
          </button>
          <button className='memoryControl__Button memory-Control__save'>
            SV
          </button>
          <button className='memoryControl__Button memory-Control__memory'>
            ME
          </button>
          <button className='memoryControl__Button memory-Control__delete'>
            DE
          </button>
        </div>
        <div className='controlPanel'>
          <button className='controlPanel__Operator controlPanel__Button'>
            <img
              className='controlPanel__ImgButton'
              src={require('./img/charater C.png')}
            />
          </button>
          <button className='controlPanel__Operator controlPanel__Button'>
            <img
              className='controlPanel__ImgButton'
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMElEQVR4nO2UQUoDMRiFv5WeQAXHWepNeiZ7ESld240UV7Y3KCJuWyi4agvtyoIO3VcCrxCGTCaZjF3NB2Hgn+R/k+TNg46OOC6Ad2BGAnfAGCiADTAEbmrW9IEjME8R3auJPXZAVrEmBw6a12sqPFaDNwmZMVFtVLPGPBtTqElW2tFp12V6enfQvMYcNULqxlBL1R9TRGOFT4b6Ai5J5FfNjMl8R92KoWxe1WwicTOmqj23bSibB+Db8Tttgdu2DVXGOPpFx74CnoArh6HMHZ+NvkSX+ohy0hW6rvs2RXOHoaqSbu9JumhchvIlnbmuZKoM5Uu6n1RRX0LFBE40voT6N+G8JqF2gUkXTV1CjQKTLoqQhMqsXVclXTSLwIS6BgbA2pF0jfgEPqyE6ugghD9WEYrI0h9bwAAAAABJRU5ErkJggg=='
            />
          </button>
          <button className='controlPanel__Operator controlPanel__Button'>
            <img
              className='controlPanel__ImgButton'
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABX0lEQVR4nO3ZP0iVURgH4Cc0cXGotjYDJwdnqbGgxSUQmtpsFdpcxFHcBBenwEHcbY+gSXJ0aGhoCXJpCYKgP1z4vrhI0b2l3I/v/T1whrud38v9znnPOURERERERERE/L8p7CpqDsf4oaB5nDXhyxVgGR+HwpcqwGN8uRC+RAGuYQvffxO+9wWYxeEfgve+ALdx8pfwvS3AEt6PEL6XBXiEzyOG710BNvBtjPCDcY53OMUrvMAR9rGDTTzDGlbxEHebf9kd3MT1SQefwfMxg1/FGGyzH5pG6w1eNx3nQdN2bzc70jqeYAX3cQ+Lzbp1Y9zwt/CyA+Evc4xsAW87MOGJFOABPnVgshMpwFN87cBEUwD5BExsDVB9EWyV3gb72AgNTrD/bKNqKzys9GGoVfo43Cp9IdIqfSXWKn0pOqzstfiw0g8jrdJPY63Sj6Otaez9+hURERERERERoVt+Ak5unhI8HLDTAAAAAElFTkSuQmCC'
            />
          </button>
          <button className='controlPanel__Operator controlPanel__Button'>
            <img
              className='controlPanel__ImgButton'
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAXUlEQVR4nO3VMQqAMAxG4Xc8o/dfW2h7D0Wo0E0HGyL+H2R+S0JAJJgNaEAFzDNcgb1P+UXYevyMLp5h+a4VyMPGvjX57t7LhOg1LWTYgDQhmnTv8pT+sRvTP5awDufydEXZKLvNAAAAAElFTkSuQmCC'
            />
          </button>
          <button className='controlPanel__Number controlPanel__Button'>
            9
          </button>
          <button className='controlPanel__Number controlPanel__Button'>
            8
          </button>
          <button className='controlPanel__Number controlPanel__Button'>
            7
          </button>
          <button className='controlPanel__Number controlPanel__Button'>
            <img
              className='controlPanel__ImgButton'
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAv0lEQVR4nO2VXQrCMBAGxwtalZY86NkVLP6hN6hQCaQgJdXdsFHEDOQt+02TbBooFP6JBrgBB2ChqFsCJ+AK1FrpLBT2YXSAE9S5MHeo8xlqLk8BEvlY6sc5RbyKBE3JY9IuZCRRRwLvwGbUC7E561SpRJ5N+m4rpUdhvvJsK5XKs0qZONNYw31E2ueUu280V/Piykjuubl0wFxeGfwyfYaa1uCR2KeIjwbPos9QU4Uv3iq3zM/dhdp5irhQ+E0ekyummbane5EAAAAASUVORK5CYII='
            />
          </button>
          <button className='controlPanel__Number controlPanel__Button'>
            6
          </button>
          <button className='controlPanel__Number controlPanel__Button'>
            5
          </button>
          <button className='controlPanel__Number controlPanel__Button'>
            4
          </button>
          <button className='controlPanel__Number controlPanel__Button'>
            <img
              className='controlPanel__ImgButton'
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAc0lEQVR4nO2UMQqAMAxF3/Gsg3j/wULVQS8Rl05FpGATpeTBX/MgCR+cnzMDJ3AAk6V4ByRnsxRLERerIb5qK6SbVY9AvBn8NhEIT+KkIK1quPSVOACLgnQBBhrQz1fX4mIzxG9sRSzKwYwArDlNGslBiwtYs6fhOILl9QAAAABJRU5ErkJggg=='
            />
          </button>
          <button className='controlPanel__Number controlPanel__Button'>
            3
          </button>
          <button className='controlPanel__Number controlPanel__Button'>
            2
          </button>
          <button className='controlPanel__Number controlPanel__Button'>
            1
          </button>
          <button className='controlPanel__Number controlPanel__Button'>
            <img
              className='controlPanel__ImgButton'
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVR4nO3RQQoAEAAF0Tke7r+m5B6sbGVBKfPqr2fxQZKkTQkoQD+8AsRVuF6IzrUnwxHIF6IZCLt/S5I+NwDHN1vXMmzw6wAAAABJRU5ErkJggg=='
            />
          </button>
          <button
            className='controlPanel__Number controlPanel__Button'
            disabled='disabled'
            style={{ background: 'transparent', border: 'transparent' }}
          />
          <button className='controlPanel__Number controlPanel__Button'>
            0
          </button>
          <button
            className='controlPanel__Number controlPanel__Button'
            disabled='disabled'
            style={{ background: 'transparent', border: 'transparent' }}
          />
          <button className='controlPanel__Number controlPanel__Button'>
            <img
              className='controlPanel__ImgButton'
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAASElEQVR4nO3UMQrAIBAF0Tle3PvXCsF7xMrWQrJgwjz49RQLC5L+JoAGPC+vAWUVvhOic/3IcAFqQrQC1+79pW8KPxd+LkmnGYBPt60ph2azAAAAAElFTkSuQmCC'
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
