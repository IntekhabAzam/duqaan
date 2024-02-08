export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      { 
        name: 'category',
        title: 'Category',
        type: 'string',
      },
      { 
        name: 'actualPrice',
        title: 'ActualPrice',
        type: 'number',
      },
      { 
        name: 'sellingPrice',
        title: 'SellingPrice',
        type: 'number',
      },
      { 
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'specifications',
        title: 'Specifications',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'bulletPoint',
                title: 'Bullet Point',
                type: 'string',
              },
            ],
          },
        ],
      },
    ]
  }