export const GET = async (request, { params }) => {
  try {
    //DB
    // const prompts = await Prompt.find({ creator: params.id }).populate(
    //   "creator"
    // );

    //const prompt = await Prompt.findById(params.id).populate("creator");
    const productId = params.id;
    const productData = handleProductSelection(productId);

    function handleProductSelection(productId) {
      switch (productId) {
        case "123401":
          // Code to handle product 1
          return { name: "Product 1", price: 10.99 };

        case "123402":
          // Code to handle product 2
          return { name: "Product 2", price: 10.99 };
        case "123403":
          // Code to handle product 3
          return { name: "Product 1", price: 10.99 };

        default:
          return { name: "Product 1", price: 10.99 };
      }
    }

    return new Response(JSON.stringify(productData), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts created by user", {
      status: 500,
    });
  }
};
