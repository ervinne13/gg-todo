
export const generateUUID = () => {
    //  taken directly from: 
    //  https://codepen.io/Jvsierra/pen/BNbEjW
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }
      
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +s4() + '-' + s4() + s4() + s4();
};
