const { hashSync, genSaltSync } = require("bcrypt");
const {userRespository} = require("./user");
const {categoryRespository} = require("./category");
const {contentRespository} = require("./content");
const {contentCategoryRespository} = require("./contentCategory");
const {userContentRespository} = require("./userContent");

let idUser1 = null;
let idUser2 = null;
let idContent1 = null;
let idContent2 = null;
let idContent3 = null;
let idContent4 = null;
let idContent5 = null;
let idContent6 = null;
let idCategory1 = null;
let idCategory2 = null;
let idCategory3 = null;


const createUsers = async () => {
    const salt = genSaltSync(10);
    try{
    //usuario 1
    let userName = "nhernandez",
    name = "Nafer",
    lastName = "Hernandez",
    role = "user",
    password = hashSync("12345*", salt);
    let user1 = await userRespository.getUserByUserName(userName);
    console.log(user1);
    if(user1.data){
        idUser1 = user1.data.id;
    }else{
        user1 = await userRespository.createUser(userName,name,lastName,password,role);
        if(!user1.error){
            idUser1 = user1.data;
        }
    }
    

    //usuario 2
    userName = "pmendoza",
    name = "Pedro",
    astName = "Mendoza",
    ole = "user",
    password = hashSync("54321*", salt);
    let user2 = await userRespository.getUserByUserName(userName);
    
    if(user2.data){
        idUser2= user2.data.id;
    }else{
        user2 = await userRespository.createUser(userName,name,lastName,password,role);
        if(!user2.error){
            idUser2 = user2.data;
        }
    }

    }catch(e){
        console.log(e);
    }
   
};

const createContent = async () => {
    idContent1 = await contentRespository.createContent("Traicionada","https://www.youtube.com/watch?v=_40CDeU_BwI","El alcalde de Detroit pone fin a su negocio con la mafia rusa cuando las mujeres jóvenes son secuestradas y aparecen drogadas y muertas.");
    if(!idContent1.error){
        idContent1 = idContent1.data;
    }
    
    idContent2 = await contentRespository.createContent("Hacker","https://www.youtube.com/watch?v=UVQrM86zc30","Cuando su familia comienza a tener problemas económicos, Alex Danyliuk busca en el crimen una solución a la situación. Con la ayuda de Sye, un matón que conoce las formas del crimen en Internet, Alex descubre el mundo del mercado negro de los negocios en línea, donde comienza a robar las identidades de las personas y a cometer pequeños desfalcos.");
    if(!idContent2.error){
        idContent2 = idContent2.data;
    }

    idContent3 = await contentRespository.createContent("El Mensajero","https://www.youtube.com/watch?v=9WRxOTK3UCE","Paladín es el mejor en el negocio de mensajería profesional, se dedica a recoger y entregar paquetes para una misteriosa organización gubernamental conocida como Sección 13. Jake se ha retirado del negocio, pero un paquete muy peligroso debe ser entregado a la Sección 13.");
    if(!idContent3.error){
        idContent3 = idContent3.data;
    }

    idContent4 = await contentRespository.createContent("Escuela de la vida","https://www.youtube.com/watch?v=eJE4d4fDp6s","Un nuevo maestro rápidamente se vuelve popular en su lugar de trabajo, la Escuela Intermedia Fallbrook, atrayendo la atención y los celos de un profesor de biología que está obsesionado con ser elegido Maestro del Año.");
    if(!idContent4.error){
        idContent4 = idContent4.data;
    }
    
    idContent5 = await contentRespository.createContent("Justicia Del Corazón","https://www.youtube.com/watch?v=gW5OT5Z6cWk","Un juez estricto aprende justicia y misericordia cuando se enfrenta a dos personas contra las que emitió juicios.");
    if(!idContent5.error){
        idContent5 = idContent5.data;
    }

    idContent6 = await contentRespository.createContent("Alcatraz","https://www.youtube.com/watch?v=6naRCcs7Gbo","uatro hombres conspiran para escapar de una de las prisiones más famosas de la historia estadounidense y del mundo. Tres de ellos consiguen llegar a la orilla del agua... Sin embargo, lo que les ocurrió cuando abandonaron la isla sigue siendo un misterio hasta el día de hoy.");
    if(!idContent6.error){
        idContent6 = idContent6.data;
    }
};

const createCategories = async () => {
    let category1 = await categoryRespository.getCategoryByName("Acción");
    console.log(category1);
    if(category1.data){
        idCategory1 = category1.data.id
    }else{
        idCategory1 = await categoryRespository.createCategory("Acción");
        if(!idCategory1.error){
            idCategory1 = idCategory1.data;
        }
    }

    let category2 = await categoryRespository.getCategoryByName("Aventuras");
    if(category2.data){
        idCategory2 = category2.data.id
    }else{
        idCategory2 = await categoryRespository.createCategory("Aventuras");
        if(!idCategory2.error){
            idCategory2 = idCategory2.data;
        }
    }

    let category3 = await categoryRespository.getCategoryByName("Drama");
    if(category3.data){
        idCategory3 = category3.data.id
    }else{
        idCategory3 = await categoryRespository.createCategory("Drama");
        if(!idCategory3.error){
            idCategory3 = idCategory3.data;
        }
    }
};

const createContentsCategories = async () => {
    try{
        await contentCategoryRespository.createContentCategory(idContent1,idCategory1);
        await contentCategoryRespository.createContentCategory(idContent1,idCategory3);
        await contentCategoryRespository.createContentCategory(idContent2,idCategory2);
        await contentCategoryRespository.createContentCategory(idContent2,idCategory3);
        await contentCategoryRespository.createContentCategory(idContent3,idCategory3);
        await contentCategoryRespository.createContentCategory(idContent4,idCategory1);
        await contentCategoryRespository.createContentCategory(idContent4,idCategory2);
        await contentCategoryRespository.createContentCategory(idContent5,idCategory2);
        await contentCategoryRespository.createContentCategory(idContent5,idCategory1);
        await contentCategoryRespository.createContentCategory(idContent6,idCategory1);
        await contentCategoryRespository.createContentCategory(idContent6,idCategory2);
        await contentCategoryRespository.createContentCategory(idContent6,idCategory3);
    }catch(e){
        console.log(e);
    }
};

const createUserContents = async () => {
    try{
        await userContentRespository.createUserContent(idUser1,idContent1);
        await userContentRespository.createUserContent(idUser1,idContent2);
        await userContentRespository.createUserContent(idUser1,idContent3);
        await userContentRespository.createUserContent(idUser1,idContent6);
        await userContentRespository.createUserContent(idUser2,idContent1);
        await userContentRespository.createUserContent(idUser2,idContent2);
        await userContentRespository.createUserContent(idUser2,idContent3);
        await userContentRespository.createUserContent(idUser2,idContent4);
        await userContentRespository.createUserContent(idUser2,idContent5);
        await userContentRespository.createUserContent(idUser2,idContent6);
    }catch(e){
        console.log(e);
    }
};

const loadData = async () => {
    await createUsers();
    await createContent();
    await createCategories();
    await createContentsCategories();
    await createUserContents();
};


module.exports.loadData = loadData;