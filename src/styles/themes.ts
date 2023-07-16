export interface AppThemeProps {
  theme: {
    colors: {
      background: string,
      font: string,
    }
  }
}

export const darkTheme = {
  colors: {
    background: 'linear-gradient(to top, #060209, #0f0d11, #161517, #1b1b1c, #212121)',
    font: '#DDE6ED',
    hover: '#060209',
    hoverBackground: 'linear-gradient(to right top, #dde6ed, #cfd6dc, #c1c7cc, #b4b8bc, #a6a9ac)',
    fontGradient: '#dde6ed, #a6a9ac',
  }
};

export const lightTheme = {
  colors: {
    background: 'linear-gradient(to bottom, #26093b, #370d56, #491173, #5c1491, #6f17b0)',
    font: '#DDE6ED',
    hover: '#7819BD',
    hoverBackground: 'linear-gradient(to right top, #dde6ed, #cfd6dc, #c1c7cc, #b4b8bc, #a6a9ac)',
    fontGradient: '#dde6ed, #a6a9ac',
  }
};

//ROXO 800 = #26093B
//ROXO 700 = #480F70
//ROXO 600 = #50107D
//ROXO 500 = #601496
//ROXO 400 = #6F17B0
//ROXO 300 = #7819BD
//ROXO 200 = #A121FC
//ROXO 100 = #C06DFC

//GRAY 900 = #060209
//GRAY 800 = #0C0C0D
//GRAY 700 = #212121
//GRAY 600 = #323232
