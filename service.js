const getIngredientsData = async () => {
    try
    {
        const resultJson = await fetch('https://kaotika-server.fly.dev/ingredients');

        const json = await resultJson.json();

        return json;
    }
    catch(error)
    {
        console.log(error);
    }  
}

const getDiesesData = async () => {
    try
    {
        const resultJson = await fetch('https://kaotika-server.fly.dev/diseases');

        const json = await resultJson.json();

        return json;
    }
    catch(error)
    {
        console.log(error);
    }  
}

export {getIngredientsData, getDiesesData};