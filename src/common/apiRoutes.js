const axios = require("axios").default;

export const fetchData = async (user) => {
	try {
		const data = user;
		const correctData = user["user"];
		const response = await axios
			.request({
				method: "POST",
				url: `https://fashion-store-backend.herokuapp.com/api/signup`,
				headers: {
					"Content-Type": "application/json;charset=UTF-8",
					"Access-Control-Allow-Origin": "*",
				},
				data: JSON.stringify(correctData),
			})
			.then((res) => {
				const result = res.data;
				return result;
			});
		const resData = await response;
		return resData;
	} catch (e) {
		console.log(e);
	}
}; // https://fashion-store-backend.herokuapp.com

export const fetchLogin = async (user) => {

    try {

      const {email,password} = user;
      const correctData = {email,password}
      console.log('api',correctData);
        const response = await axios.request({
            method: 'POST',
            url: `https://fashion-store-backend.herokuapp.com/api/login`,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*"
            },
            data: JSON.stringify(correctData),

        }).then((res) => {

            const result = res.data;
            return result;
        });

        const resData = await response;
        return resData;
	} catch (e) {
        console.log(e);
    }


}

export async function fetchUsers() {
	try {
		const data = await fetch("https://reqres.in/api/users");
		const returnedData = await data.json();
		return returnedData.data;
	} catch (e) {}
}

/*
axios.get('https://reqres.in/api/users')
    .then (res=>{
        const data = res.data.data
        return data;
    })
*/

// export const fetchRatingsAdd = async (user) =>{

//     try{

//         console.log('rating api user',user);
//     const {itemId,userName,rate,comment} = user.data ;
//      console.log('api data = ',rate,comment);

//      const reqBody = {userName,rate,comment};
//      const id = itemId;

//      console.log('body',reqBody);

//      // console.log('api rate = ',data.data);
//   //  `/fetch/${date}`

//     const response = await axios.request({
//             method: 'POST',
//             url: `http://localhost:4000/api/addRatingWithComment/${id}`,
//             headers: {
//                 'Content-Type': 'application/json;charset=UTF-8',
//                       "Access-Control-Allow-Origin": "*"
//             },
//             data: JSON.stringify(reqBody),

//           }).then((res) => {

//             console.log('output',res.data);

//            // console.log('out',res.data);

//             const result =  res.data;

//             return result;
//           });

//        const resData = await response;

//        console.log('responsee api',resData);

//       return resData;

//     }
//     catch(e){
//         console.log(e);
//     }

//   }

export const fetchRatingsAdd = async (user) => {
	try {
		const { itemId, userName, rate, comment } = user.data;
		console.log("api data = ", rate, comment);

		const reqBody = { userName, rate, comment };
		const id = itemId;
		const response = await axios
			.request({
				method: "POST",
				url: `https://fashion-store-backend.herokuapp.com/api/addRatingWithComment/${id}`,
				headers: {
					"Content-Type": "application/json;charset=UTF-8",
					"Access-Control-Allow-Origin": "*",
				},
				data: JSON.stringify(reqBody),
			})
			.then((res) => {
				const result = res.data;

				return result;
			});

		const resData = await response;
		return resData;
	} catch (e) {
		console.log(e);
	}
};

export const getRatingComments = async (productId) => {
	const response = await axios.get(
		`https://fashion-store-backend.herokuapp.com/api/getRatingsWithComments/${productId}`
	);
	return response;
};

export const getItemDetails = async (productId) => {
	const response = await axios.get(
		`https://fashion-store-backend.herokuapp.com/api/items/${productId}`
	);
	return response;
};
export const getAllCategories = async () => {
	const response = await axios.get(
		"https://fashion-store-backend.herokuapp.com/api/getCategoriesToNav"
	);
	return response;
};

// getUserWishList

export const getUserWishList = async (userId) => {

    const id = userId;
    const response = await axios.get(`https://fashion-store-backend.herokuapp.com/api/getWishList/${id}`);
    return response;

}

// removeItemFromWishList

export const removeItemFromWishList = async (user) => {

    try {

        const data = user;
        const response = await axios.request({
            method: 'POST',
            url: `https://fashion-store-backend.herokuapp.com/api/deleteWishListProduct`,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*"
            },
            data: JSON.stringify(data),

        }).then((res) => {
        });

    } catch (e) {
        console.log(e);
    }


}

export const addToCartFromWishList = async (data) => {
	try {
		const { userId, product } = data;

		const reqBody = product;

		const id = userId;

		const response = await axios
			.request({
				method: "POST",
				url: `https://fashion-store-backend.herokuapp.com/api/addItemWishListFromCart/${id}`,
				headers: {
					"Content-Type": "application/json;charset=UTF-8",
					"Access-Control-Allow-Origin": "*",
				},
				data: JSON.stringify(reqBody),
			})
			.then((res) => {
				const result = res.data;

				return result;
			});

		const resData = await response;
	} catch (e) {
		console.log(e);
	}
};

export const addToWishList = async (data) => {

    const {userId, item} = data.data;

    console.log('item id of add to wishlist',item._id);


    try {


        const reqBody = {userId};
        const id = item._id; // sample value

        const response = await axios.request({
            method: 'POST',
            url: `https://fashion-store-backend.herokuapp.com/api/addItemToWishList/${id}`,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*"
            },
            data: JSON.stringify(reqBody),
        }).then((res) => {

            const result = res.data;

            return result;
        });

        const resData = await response;

        return resData;


    } catch (e) {
        console.log(e);
    }

}

export const getAllProducts = async () => {
	const response = await axios.get(`https://fashion-store-backend.herokuapp.com/api/allitems`);
	return response;
};

export const checkUserRated = async (user) => {
	try {
		const { username, product } = user;
		const reqBody = { username };
		const id = String(product);
		//console.log("reqqqqqqqqqqqqqqqqbodyyy", reqBody);
		const response = await axios
			.request({
				method: "POST",
				url: `https://fashion-store-backend.herokuapp.com/api/checkUserIsRated/${id}`,
				headers: {
					"Content-Type": "application/json;charset=UTF-8",
					"Access-Control-Allow-Origin": "*",
				},
				data: JSON.stringify(reqBody),
			})
			.then((res) => {
				const result = res.data;

				return result;
			});

		const resData = await response;

		//console.log("responsee api", resData);

		return resData;
	} catch (e) {
		console.log(e);
	}
};

export const updateRating = async (data) => {
	try {
		const { productId, username, rateId, comment, rate } = data;
		const reqBody = { productId, rate, comment };
		const id = String(rateId);
		//console.log("reqqqqqqqqqqqqqqqqbodyyy", reqBody);

		const response = await axios
			.request({
				method: "PUT",
				url: `https://fashion-store-backend.herokuapp.com/api/updateRating/${id}`,
				headers: {
					"Content-Type": "application/json;charset=UTF-8",
					"Access-Control-Allow-Origin": "*",
				},
				data: JSON.stringify(reqBody),
			})
			.then((res) => {
				const result = res.data;

				return result;
			});

		const resData = await response;

		//console.log("responsee api", resData);

		return resData;
	} catch (e) {
		console.log(e);
	}
};

export const deleteRating = async (data) => {
	try {
		const { productId, username, rateId } = data;
		const reqBody = { productId };
		const id = String(rateId);
		//console.log("reqqqqqqqqqqqqqqqqbodyyy", reqBody);

		const response = await axios
			.request({
				method: "DELETE",
				url: `https://fashion-store-backend.herokuapp.com/api/deleteRating/${id}`,
				headers: {
					"Content-Type": "application/json;charset=UTF-8",
					"Access-Control-Allow-Origin": "*",
				},
				data: JSON.stringify(reqBody),
			})
			.then((res) => {
				const result = res.data;

				return result;
			});

		const resData = await response;

		//console.log("responsee api", resData);

		return resData;
	} catch (e) {
		console.log(e);
	}
};

export const getSearchProduct = async (data) =>{
	console.log(data.payload)
	const response = await axios.get(`https://fashion-store-backend.herokuapp.com/api/getProductToAddDiscount/`+data.payload);
	return response.data;

}

export const updateDiscount = async (data) =>{

	const response = await axios.patch('https://fashion-store-backend.herokuapp.com/api/updateProductDiscount/'+data.payload._id,{ discount:parseInt(data.payload.discount)});
	return  response.status;
}

export const deductQuantity = async (data)=>{

	const response = await axios.patch('https://fashion-store-backend.herokuapp.com/api/deductStock/'+data.id,{ color:data.color , size:data.size , quantity:data.quantity});
	return  response.status;

}

export const getCart = async (id)=>{
	const response = await axios.get('https://fashion-store-backend.herokuapp.com/api/getCart/'+id.payload);
	return response;
}
// https://sensorapp-test.herokuapp.com/getAllSensors
export const updateCartDb = async(data)=>{
	const response = await axios.post('https://fashion-store-backend.herokuapp.com/api/addItemToCart/'+data[0].userId,{data:data[0].payload})
}

export const removeCartDb = async (data)=>{
		//console.log(data[0].payload.uuid)
	const response =await axios.patch('https://fashion-store-backend.herokuapp.com/api/deletecart/'+data[0].userId,{uuid:data[0].payload.uuid})
}


export const LoginAsStoreManager = async (user) => {

    try {

      const {email,password} = user;
      const correctData = {email,password}
      console.log('api',correctData);
        const response = await axios.request({
            method: 'POST',
            url: `https://fashion-store-backend.herokuapp.com/api/managerLogin`,
           	data: correctData,

        }).then((res) => {

            const result = res.data;
            return result;
        });

        const resData = await response;
        return resData;
	} catch (e) {
        console.log(e);
    }
}

export const LoginAsAdmin = async (user) => {

    try {

      const {email,password} = user;
      const correctData = {email,password}
      console.log('api',correctData);
        const response = await axios.request({
            method: 'POST',
            url: `https://fashion-store-backend.herokuapp.com/api/adminLogin`,
           	data: correctData,

        }).then((res) => {

            const result = res.data;
            return result;
        });

        const resData = await response;
        return resData;
	} catch (e) {
        console.log(e);
    }
}

export const getTest = async ()=>{
	const response = await axios.get('https://sensorapp-test.herokuapp.com/getAllSensors');
	console.log('res',response);
	return response;
}
export  const removeCartCompletely= async (data) =>{
	try{

		const  response = await  axios.delete('https://fashion-store-backend.herokuapp.com/api/deletecartcompletely/'+data.payload)
	}catch (e) {
		console.log(e)
	}
}
