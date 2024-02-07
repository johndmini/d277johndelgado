export interface Sources {
    source: string;
    sourceLink: string[];
    funFactLink?: string;
  }
  
  export const AlbanySource: Sources = {
    source: 'Albany',
    sourceLink: [
      ' https://en.wikipedia.org/wiki/Albany,_New_York ',
      ' https://www.britannica.com/place/Albany-New-York ',
      ' https://www.albany.org/ ',
      ' https://www.albany.com/ ',
    ],
    funFactLink:
      'https://historictownsofamerica.com/oldest-towns#:~:text=Albany%2C%20New%20York%20is%20one,in%201686%20under%20English%20rule.',
  };
  
  export const BuffaloSource: Sources = {
    source: 'Buffalo',
    sourceLink: [
      ' https://en.wikipedia.org/wiki/Buffalo,_New_York ',
      ' https://www.britannica.com/place/Buffalo-New-York ',
      ' https://www.visitbuffaloniagara.com/ ',
      ' https://www.buffalony.gov/ ',
    ],
    funFactLink:
      'https://www.discover716.com/post/made-in-buffalo-the-stories-behind-products-invented-in-the-716 ',
  };
  
  export const WatertownSource: Sources = {
    source: 'Watertown',
    sourceLink: [
      ' https://en.wikipedia.org/wiki/Watertown,_New_York ',
      ' https://www.britannica.com/place/Watertown-New-York ',
      ' https://visit1000islands.com/ ',
      ' https://www.watertown-ny.gov/ ',
    ],
    funFactLink:
      'https://en.wikipedia.org/wiki/F._W._Woolworth_Building_(Watertown,_New_York)#:~:text=Woolworth%20began%20his%20retail%20career,dime%20department%20stores%20in%201879.',
  };
  
  export const NewYorkStateSource: Sources = {
    source: 'New York State',
    sourceLink: [
      'https://en.wikipedia.org/wiki/New_York_(state)',
      'https://www.britannica.com/place/New-York-state',
      'https://www.ny.gov/',
      'https://www.iloveny.com/',
    ],
    funFactLink:
      'https://www.timeout.com/newyork/news/this-nyc-spot-is-the-most-filmed-location-in-america-033122',
  };
  