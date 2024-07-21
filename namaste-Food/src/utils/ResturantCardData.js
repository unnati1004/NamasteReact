export const resCard = [
  {
    statusCode: 0,
    data: {
      statusMessage: "done successfully",
      cards: [
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
              text: "Manokamana Foods",
              headerStyling: {
                textColor: "text_Highest_Emphasis",
                textVariant: "header_H3_Black",
              },
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
              tabs: [
                {
                  id: "Order Online",
                  title: "Order Online",
                },
              ],
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              info: {
                id: "190851",
                name: "Manokamana Foods",
                city: "Mughalsarai",
                slugs: {
                  restaurant: "manokamana-foods-subhash-park-kudhe-khurd",
                  city: "mughalsarai",
                },
                uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
                cloudinaryImageId: "zyrfphzlf3pa1vjngvlh",
                locality: "G T Road",
                areaName: "Subhash Nagar",
                costForTwo: "25000",
                costForTwoMessage: "₹250 for two",
                cuisines: ["North Indian", "South Indian"],
                avgRating: 3.8,
                veg: true,
                feeDetails: {
                  restaurantId: "190851",
                  fees: [
                    {
                      name: "TYPE_DISTANCE",
                      fee: 1200,
                    },
                    {
                      name: "TYPE_TIME",
                    },
                  ],
                  totalFee: 1200,
                  title: "Delivery Charge",
                  amount: "1200",
                  icon: "v1648635511/Delivery_fee_new_cjxumu",
                  message: "Order above 149 for discounted delivery fee",
                },
                parentId: "132218",
                avgRatingString: "3.8",
                totalRatingsString: "1K+ ratings",
                sla: {
                  restaurantId: "190851",
                  deliveryTime: 23,
                  minDeliveryTime: 20,
                  maxDeliveryTime: 25,
                  lastMileTravel: 0.3,
                  serviceability: "SERVICEABLE",
                  stressFactor: 1,
                  rainMode: "RAIN_MODE_NONE",
                  longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                  zoneId: 2036,
                  slaString: "20-25 MINS",
                  lastMileTravelString: "0.3 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseMessage: "Closes soon",
                  nextCloseTime: "2024-07-17 23:00:00",
                  visibility: true,
                  opened: true,
                  restaurantClosedMeta: {},
                },
                aggregatedDiscountInfo: {
                  shortDescriptionList: [
                    {
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                    {
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  descriptionList: [
                    {
                      meta: "15% off upto ₹125 |  Use KOTAK125 Above ₹499",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                    {
                      meta: "20% off upto ₹125 |  Use BOBDC Above ₹299",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  visible: true,
                },
                badges: {},
                slugString: "manokamana-foods-subhash-park-kudhe-khurd",
                isOpen: true,
                labels: [
                  {
                    title: "Timings",
                    message: "null",
                  },
                  {
                    title: "Address",
                    message: "952,GT ROAD SUBHASH NAGAR MUGHALSARAI",
                  },
                  {
                    title: "Cuisines",
                    message: "North Indian,South Indian",
                  },
                ],
                totalRatings: 1000,
                aggregatedDiscountInfoV2: {
                  shortDescriptionList: [
                    {
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                    {
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  descriptionList: [
                    {
                      meta: "15% off upto ₹125 |  Use KOTAK125 Above ₹499",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                    {
                      meta: "20% off upto ₹125 |  Use BOBDC Above ₹299",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  couponDetailsCta: "View coupon details",
                },
                type: "F",
                headerBanner: {
                  url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/190851",
                },
                expectationNotifiers: [
                  {
                    text: "Order above 149 for discounted delivery fee",
                    icon: {
                      imageId: "v1648635511/Delivery_fee_new_cjxumu",
                    },
                    popup: {
                      cta: {},
                    },
                    type: "DISTANCE_FEE_NON_FOOD_LM",
                    enrichedText: "Order above 149 for discounted delivery fee",
                    halfCardPopup: {
                      halfCardPopupHeader: {},
                    },
                    trailingIcon: {},
                  },
                ],
                ratingSlab: "RATING_SLAB_4",
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                },
                hasBestsellerItems: true,
                cartOrderabilityNudgeBanner: {
                  parameters: {},
                  presentation: {},
                },
                latLong: "25.28541,83.112065",
                backgroundImageOverlayInfo: {},
              },
              analytics: {},
            },
            relevance: {
              type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
              sectionId: "POP_UP_CROUTON_MENU",
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
              layout: {
                rows: 1,
                columns: 2,
                horizontalScrollEnabled: true,
                itemSpacing: 12,
                lineSpacing: 10,
                widgetPadding: {},
                containerStyle: {
                  containerPadding: {
                    left: 10,
                    right: 10,
                    bottom: 16,
                  },
                },
                scrollBar: {},
              },
              id: "offerCollectionWidget_UX4",
              gridElements: {
                infoWithStyle: {
                  "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                  offers: [
                    {
                      info: {
                        header: "15% OFF UPTO ₹125",
                        offerTagColor: "#E46D47",
                        logoBottom:
                          "MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/21e80364-d187-4037-8298-153e7feee2b0_Kotak.png",
                        offerIds: ["4ec8768d-8327-4329-9b58-6dbefb8a3c87"],
                        expiryTime: "1970-01-01T00:00:00Z",
                        couponCode: "USE KOTAK125",
                        description: "ABOVE ₹499",
                        offerType: "offers",
                        restId: "190851",
                        offerLogo:
                          "MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/21e80364-d187-4037-8298-153e7feee2b0_Kotak.png",
                        descriptionTextColor: "#7302060C",
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                    {
                      info: {
                        header: "20% OFF UPTO ₹125",
                        offerTagColor: "#E46D47",
                        logoBottom:
                          "MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/5652719b-c6bc-4f4b-a5d7-39917a6ffdf6_BOBMenuVisibilityLogo.png",
                        offerIds: ["69b0ec3d-0b23-44b3-9bb5-1c9a923a1b2a"],
                        expiryTime: "1970-01-01T00:00:00Z",
                        couponCode: "USE BOBDC",
                        description: "ABOVE ₹299",
                        offerType: "offers",
                        restId: "190851",
                        offerLogo:
                          "MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/5652719b-c6bc-4f4b-a5d7-39917a6ffdf6_BOBMenuVisibilityLogo.png",
                        descriptionTextColor: "#7302060C",
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                  ],
                  habitMilestoneInfo: {
                    callout: {},
                  },
                  loyaltyDiscoverPresentationInfo: {
                    logoCtx: {},
                  },
                },
              },
            },
          },
        },
        {
          groupedCard: {
            cardGroupMap: {
              REGULAR: {
                cards: [
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                        isPureVeg: true,
                        badges: {},
                        vegOnlyDetails: {
                          imageId: "AutoVegOnly_qkjowj",
                          title: "Showing only vegetarian options.",
                          description:
                            "Tap on the VEG ONLY button to turn off the setting",
                        },
                        topRatedFilter: {
                          attributes: {
                            displayText: "Ratings 4.0+",
                          },
                        },
                        kidsCategoryFilter: {
                          attributes: {
                            displayText: "Kids Favourites",
                            tooltip: {
                              enabled: true,
                              displayText:
                                "Kids Favourites Filter applied. Remove this filter to see the full Menu.",
                            },
                          },
                        },
                        vegFilter: {
                          attributes: {
                            displayText: "VEG",
                          },
                        },
                        nonvegFilter: {
                          attributes: {
                            displayText: "NONVEG",
                          },
                        },
                      },
                      relevance: {
                        type: "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                        sectionId: "MENU_FILTER_TOGGLE",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Recommended",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182151",
                                name: "Cheese Pizza",
                                category: "New Startup Pizza & Pasta",
                                description:
                                  "A fresh flattened bread dough generously layered with grated cheese,vegetables & italian herbs baked to perfection.",
                                imageId: "enoz43rf8voksaztuoom",
                                inStock: 1,
                                isVeg: 1,
                                price: 14900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.1",
                                    ratingCount: "19 ratings",
                                    ratingCountV2: "19",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182239",
                                name: "Paneer btr masala Full",
                                category: "Desi Handi Main Course",
                                description:
                                  "A rich and flavorful paneer dish cooked in a delectable butter-based gravy, perfect for a fulfilling Desi Handi Main Course.",
                                imageId: "jatyb73qoqf10fnqjvpb",
                                inStock: 1,
                                isVeg: 1,
                                price: 24000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "16 ratings",
                                    ratingCountV2: "16",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        type: "CATEGORY_TYPE_RECOMMENDED",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Desi Handi Main Course",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182239",
                                name: "Paneer btr masala Full",
                                category: "Desi Handi Main Course",
                                description:
                                  "A rich and flavorful paneer dish cooked in a delectable butter-based gravy, perfect for a fulfilling Desi Handi Main Course.",
                                imageId: "jatyb73qoqf10fnqjvpb",
                                inStock: 1,
                                isVeg: 1,
                                price: 24000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "16 ratings",
                                    ratingCountV2: "16",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182246",
                                name: "HANDI PANEER Half",
                                category: "Desi Handi Main Course",
                                description:
                                  "A delectable and aromatic Indian main course that showcases the authentic flavors of Desi Handi cuisine.",
                                imageId: "cvc3utg3ahvr6qkjd4af",
                                inStock: 1,
                                isVeg: 1,
                                price: 16500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.4",
                                    ratingCount: "33 ratings",
                                    ratingCountV2: "33",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182117",
                                name: "Matar Paneer",
                                category: "Desi Handi Main Course",
                                description:
                                  "Juicy chunks of paneer cooked in a creamy gravy with peas and oodles of butter.",
                                imageId: "fs7daj9o25hkbdieiiv2",
                                inStock: 1,
                                isVeg: 1,
                                price: 26500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "1.9",
                                    ratingCount: "5 ratings",
                                    ratingCountV2: "5",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749244",
                                name: "Paneer Kaju Masala",
                                category: "Desi Handi Main Course",
                                description:
                                  "A spicy, warming, flavourful and super delicious dish made by cooking paneer, bell-peppers and onion with pinch of black pepper in a fragrant fresh ground spice gravy.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/2a9fb462-e498-4a06-bca2-3df5ad4c6eca_97f6b120-097f-4d7a-8ec6-26352934d0d6.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 28000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "5.0",
                                    ratingCount: "7 ratings",
                                    ratingCountV2: "7",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749152",
                                name: "Kadai Paneer",
                                category: "Desi Handi Main Course",
                                description:
                                  "Soft and creamy paneer, prepared with a delicious masala, this Kadai Paneer will leave you licking your fingers!",
                                imageId: "kjjeaoy0ly4jakafjkkk",
                                inStock: 1,
                                isVeg: 1,
                                price: 27000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.8",
                                    ratingCount: "73 ratings",
                                    ratingCountV2: "73",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749247",
                                name: "Paneer Mushroom Masala",
                                category: "Desi Handi Main Course",
                                description:
                                  "A scrumptious north Indian mushroom recipe, Mushroom Masala is a delight for mushroom lovers! Marinated mushroom chunks cooked in a variety of spices, yogurt and kasoori methi.",
                                inStock: 1,
                                isVeg: 1,
                                price: 28500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "5.0",
                                    ratingCount: "11 ratings",
                                    ratingCountV2: "11",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182115",
                                name: "PANEER DO PAYZA Full",
                                category: "Desi Handi Main Course",
                                description:
                                  "This delicious paneer dish will leave you wanting for more!",
                                imageId: "q1kvejtawospnowgz4px",
                                inStock: 1,
                                isVeg: 1,
                                price: 26500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "1.4",
                                    ratingCount: "6 ratings",
                                    ratingCountV2: "6",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749248",
                                name: "Paneer Tikka Masala",
                                category: "Desi Handi Main Course",
                                description:
                                  "Soft and delicious paneer with a twist of tikka masala - the perfect snack for any time of the day!",
                                inStock: 1,
                                isVeg: 1,
                                price: 28000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182244",
                                name: "Paneer lababdar Full",
                                category: "Desi Handi Main Course",
                                description:
                                  "A rich and creamy cottage cheese delicacy, bursting with flavors to satisfy your taste buds.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/9439d7f6-6466-485f-957a-7ebddfdb50cc_c6890779-06fd-4f9c-b8ec-907273e98a44.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 27000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.4",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749261",
                                name: "Shahi Paneer Brown Gravy ",
                                category: "Desi Handi Main Course",
                                description:
                                  "Indulge in the rich and creamy culinary delight of Shahi Paneer Brown Gravy, a flavorful treat from the Desi Handi Main Course.",
                                imageId: "t6ddu8hyb0iuh6mx64es",
                                inStock: 1,
                                isVeg: 1,
                                price: 27000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "1.3",
                                    ratingCount: "10 ratings",
                                    ratingCountV2: "10",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182124",
                                name: "Paneer Kofta with Red Gravy",
                                category: "Desi Handi Main Course",
                                inStock: 1,
                                isVeg: 1,
                                price: 27000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182110",
                                name: "HANDI PANEER Full",
                                category: "Desi Handi Main Course",
                                description:
                                  "A delectable combination of creamy paneer and aromatic spices cooked in a traditional handi, perfect for a flavorful main course.",
                                inStock: 1,
                                isVeg: 1,
                                price: 23900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.2",
                                    ratingCount: "7 ratings",
                                    ratingCountV2: "7",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749245",
                                name: "Paneer Bhurji",
                                category: "Desi Handi Main Course",
                                description:
                                  "Relish this scrambled Indian cottage cheese with onion, tomatoes and spices!",
                                inStock: 1,
                                isVeg: 1,
                                price: 23000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182237",
                                name: "Paneer btr masala Half",
                                category: "Desi Handi Main Course",
                                description:
                                  "Serves 1 | A nourishing and flavorsome Desi Handi Main Course that combines succulent paneer with a delectable buttery masala.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/47cef048-4c67-4721-8e53-5c705056bea1_617f1d74-d0f0-4c51-a823-9d3564a430f1.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 16500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "1.9",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182242",
                                name: "Paneer lababdar Half",
                                category: "Desi Handi Main Course",
                                description:
                                  "Deliciously creamy and rich, this Desi Handi main course is a delightful treat for paneer lovers.",
                                inStock: 1,
                                isVeg: 1,
                                price: 16500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "1.7",
                                    ratingCount: "5 ratings",
                                    ratingCountV2: "5",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182112",
                                name: "PANEER DO PAYZA Half",
                                category: "Desi Handi Main Course",
                                description:
                                  "This delicious paneer dish will leave you wanting for more!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/555db6a1-f125-4d4a-9735-ac94dff4b1de_9487f223-020e-4ac5-a58f-cc5e44ea554c.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 16500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.3",
                                    ratingCount: "6 ratings",
                                    ratingCountV2: "6",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749243",
                                name: "Paneer Kolhapuri",
                                category: "Desi Handi Main Course",
                                description:
                                  "All time favorite mouthwatering paneer kolhapuri made with fresh paneer and served with salad.(Serve 1)",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/7031c08a-f492-4276-bc0a-d829cf726c93_d9b55dde-477c-4608-9f42-57e7055ab93c.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 27000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.0",
                                    ratingCount: "6 ratings",
                                    ratingCountV2: "6",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182134",
                                name: "Paneer Pasanda",
                                category: "Desi Handi Main Course",
                                description:
                                  "Delicious north Indian style paneer gravy made with onions , tomatoes , grated paneer and paneer cubes. It tastes flavourful, aromatic and exceptionally good.",
                                inStock: 1,
                                isVeg: 1,
                                price: 28000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749246",
                                name: "Malai Kofta Red Gravy ",
                                category: "Desi Handi Main Course",
                                description:
                                  "A delectable Desi Handi Main Course dish with rich red gravy and smooth malai koftas that will tantalize your taste buds.",
                                imageId: "ccdtcemnsbwlqio6zti4",
                                inStock: 1,
                                isVeg: 1,
                                price: 29500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182150",
                                name: "Paneer Rogan Masala",
                                category: "Desi Handi Main Course",
                                description:
                                  "A delectable and flavorful Indian cottage cheese dish bursting with rich, aromatic spices and a luscious tomato-based gravy.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/7f16bada-5e2f-438f-a830-20e177034251_758458ed-cce2-49a0-a256-af9eba47a765.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 27000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182153",
                                name: "Manokamna Special Paneer",
                                category: "Desi Handi Main Course",
                                description:
                                  "A mouthwatering veg main course that tantalizes your taste buds with its rich flavors and exquisite textures.",
                                inStock: 1,
                                isVeg: 1,
                                price: 31000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182155",
                                name: "Chana Masala",
                                category: "Desi Handi Main Course",
                                description:
                                  "A tasty and savory gravy made from cooking chickepeas in a flavorful gravy, seasoned with Indian spices.",
                                inStock: 1,
                                isVeg: 1,
                                price: 23500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "South Indian",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749162",
                                name: "Special Dosa",
                                category: "South Indian",
                                description:
                                  "A South Indian delicacy, try out this yummy special Dosa!",
                                imageId: "qydwx72hcpwojicodyl7",
                                inStock: 1,
                                isVeg: 1,
                                price: 16500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.1",
                                    ratingCount: "79 ratings",
                                    ratingCountV2: "79",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749160",
                                name: "Masala Dosa",
                                category: "South Indian",
                                description:
                                  "Tawa- toasted, crispy and delicious dosa, folded in with masala.",
                                imageId: "g7xvjckktij0medizhix",
                                inStock: 1,
                                isVeg: 1,
                                price: 13000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.0",
                                    ratingCount: "127 ratings",
                                    ratingCountV2: "127",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749304",
                                name: "Manokamna Maharaja Dosa",
                                category: "South Indian",
                                description:
                                  "A delectable South Indian delight perfect for vegetarians, featuring a burst of authentic flavors sure to leave you craving for more.",
                                inStock: 1,
                                isVeg: 1,
                                price: 22500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "1.7",
                                    ratingCount: "9 ratings",
                                    ratingCountV2: "9",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749302",
                                name: "Paneer Dosa",
                                category: "South Indian",
                                description:
                                  "A South Indian delicacy, try out this crispy Paneer dosa with a soft and yummy filling of Paneer and masala!",
                                imageId: "a40tzaerwa7xuc1pvjmh",
                                inStock: 1,
                                isVeg: 1,
                                price: 19000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.2",
                                    ratingCount: "29 ratings",
                                    ratingCountV2: "29",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182227",
                                name: "Mushroom Spl Dosa",
                                category: "South Indian",
                                description:
                                  "A tempting and flavorful South Indian delicacy filled with savory mushroom goodness on a crispy and luscious dosa.",
                                inStock: 1,
                                isVeg: 1,
                                price: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749303",
                                name: "Schezwan Dosa",
                                category: "South Indian",
                                description:
                                  "A flavor-packed dosa topped with hot and spicy Szechwan sauce served with sambhar and chutney.",
                                imageId: "zo1gpscql8lenckrairb",
                                inStock: 1,
                                isVeg: 1,
                                price: 18500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749300",
                                name: "Rawa Masala Dosa",
                                category: "South Indian",
                                description:
                                  "A delightfully wholesome rava masala dosa, served along with the all-time favorite sambhar and chutney.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/77e14eb6-5513-43f5-ab6f-dc9a44aba063_dfcf9a9b-5357-412b-8ced-c84c7b26efe9.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 17500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.2",
                                    ratingCount: "6 ratings",
                                    ratingCountV2: "6",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182229",
                                name: "Paneer Uttpam",
                                category: "South Indian",
                                description:
                                  "A flavorful and satisfying South Indian delight made with a creamy and scrumptious paneer base.",
                                inStock: 1,
                                isVeg: 1,
                                price: 16500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749306",
                                name: "Veg Uttapam",
                                category: "South Indian",
                                description:
                                  "A pancake made from rice flour to which onion and other veggies are added during cooking. Served with",
                                imageId: "hvnhyeyua4k1xddxw0kt",
                                inStock: 1,
                                isVeg: 1,
                                price: 14500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.5",
                                    ratingCount: "5 ratings",
                                    ratingCountV2: "5",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749307",
                                name: "Onion Tomato Uttapam",
                                category: "South Indian",
                                description:
                                  "Dosa with onions and tomatoes mixed into the dosa batter and spread to a thick consistency.",
                                inStock: 1,
                                isVeg: 1,
                                price: 15000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.1",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182213",
                                name: "Rawa Onion Dosa",
                                category: "South Indian",
                                description:
                                  "Crispy, golden dosa with a delightful twist of onions and semolina, straight from the flavors of South India.",
                                inStock: 1,
                                isVeg: 1,
                                price: 14000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182192",
                                name: "Paper Dosa",
                                category: "South Indian",
                                description:
                                  "Serves 1 | As thin as paper, crispy, golden brown crepe made from fermented rice flour batter. Best served with sambar or coconut chutney.",
                                imageId: "r9nfqcewwcvtxfwpktqb",
                                inStock: 1,
                                isVeg: 1,
                                price: 9500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "1.9",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182206",
                                name: "Rawa Paper Dosa",
                                category: "South Indian",
                                description:
                                  "A crispy and flavorful South Indian delicacy with a unique twist, offering a delightful culinary experience.",
                                inStock: 1,
                                isVeg: 1,
                                price: 15000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749305",
                                name: "Mysore Masala Dosa",
                                category: "South Indian",
                                description:
                                  "A semi-spicy, crispy and delicious dosa with masala folded into it.",
                                inStock: 1,
                                isVeg: 1,
                                price: 14500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182225",
                                name: "Chilly Paneer Dosa",
                                category: "South Indian",
                                description:
                                  "A tantalizing dosa filled with flavorful paneer and a hint of South Indian spices.",
                                imageId: "rbeodtngidmurwtzmhgn",
                                inStock: 1,
                                isVeg: 1,
                                price: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182226",
                                name: "Veg Spring Roll Dosa",
                                category: "South Indian",
                                description:
                                  "An irresistible fusion of South Indian flavors wrapped in a crispy dosa, bursting with savory vegetable goodness.",
                                inStock: 1,
                                isVeg: 1,
                                price: 18500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Chinese Starters",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749265",
                                name: "Veg Manchurian",
                                category: "Chinese Starters",
                                description:
                                  "Deep-fried, assorted veggies tossed in a thik and spicy Manchurian sauce.",
                                imageId: "fryhqkggkctjmsqskkho",
                                inStock: 1,
                                isVeg: 1,
                                price: 22000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "36 ratings",
                                    ratingCountV2: "36",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182171",
                                name: "Chilli Paneer gravy full",
                                category: "Chinese Starters",
                                description:
                                  "A tantalizing Chinese starter drizzled in a luscious gravy, exuding bold flavors and irresistible textures.",
                                inStock: 1,
                                isVeg: 1,
                                price: 24000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.9",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182120",
                                name: "Paneer chilli Full",
                                category: "Chinese Starters",
                                description:
                                  "A delectable Chinese starter bursting with flavor and featuring tender paneer in a delightful medley of savory spices and zesty sauces.",
                                inStock: 1,
                                isVeg: 1,
                                price: 24000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182157",
                                name: "Crispy Baby Corn",
                                category: "Chinese Starters",
                                description:
                                  "Crispy fried baby corn in a sweet and spicy thick Chinese sauce along with onions and bell pepper (capsicum).",
                                inStock: 1,
                                isVeg: 1,
                                price: 26000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "1.6",
                                    ratingCount: "35 ratings",
                                    ratingCountV2: "35",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182114",
                                name: "Paneeer chilli Half",
                                category: "Chinese Starters",
                                imageId: "qltrxhjooxvqlajreyrj",
                                inStock: 1,
                                isVeg: 1,
                                price: 16500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.6",
                                    ratingCount: "8 ratings",
                                    ratingCountV2: "8",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182205",
                                name: "Chilly Potato",
                                category: "Chinese Starters",
                                description:
                                  "Crispy golden fries mixed with chilli sauce,cooked in a wok .",
                                imageId: "z9n3s0dw5vc7w9bti1iq",
                                inStock: 1,
                                isVeg: 1,
                                price: 19000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.8",
                                    ratingCount: "6 ratings",
                                    ratingCountV2: "6",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182182",
                                name: "Chinese Chopsy",
                                category: "Chinese Starters",
                                description:
                                  "A flavorful and savory Chinese starter bursting with authentic, irresistible flavors.",
                                inStock: 1,
                                isVeg: 1,
                                price: 18000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182109",
                                name: "Honey Chilly Potato",
                                category: "Chinese Starters",
                                description:
                                  "Deep-fried potato tossed in a flavor-packed honey chilli sauce and topped with sesame seeds.",
                                inStock: 1,
                                isVeg: 1,
                                price: 21000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749188",
                                name: "Paneer Manchurian",
                                category: "Chinese Starters",
                                description:
                                  "A delightfully tasty dish with soft paneer coated in Manchurian sauces, assorted spices and tossed with veggies.",
                                imageId: "aiq3oxrcwwkxp4lidyou",
                                inStock: 1,
                                isVeg: 1,
                                price: 26000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "9 ratings",
                                    ratingCountV2: "9",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749191",
                                name: "Paneer 65",
                                category: "Chinese Starters",
                                description:
                                  "Deliciously crispy thin and long dosa smothered with butter; served with sambhar and chutney - a typical South Indian breakfast.DRY",
                                inStock: 1,
                                isVeg: 1,
                                price: 25000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.1",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182144",
                                name: "Mushroom Chilly Dry",
                                category: "Chinese Starters",
                                description:
                                  "Juicy mushroom dipped in seasoned batter, fried and then tossed in a spicy chilli sauce along with peppers and more.",
                                inStock: 1,
                                isVeg: 1,
                                price: 26500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182149",
                                name: "Chilli Baby Corn Dry",
                                category: "Chinese Starters",
                                description:
                                  "An indulgent preparation with crispy baby corns tossed in flavoursome spicy and chilli based dressing along with onion,capsicum and spices.",
                                inStock: 1,
                                isVeg: 1,
                                price: 25000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182179",
                                name: "Veg Chopsy",
                                category: "Chinese Starters",
                                description:
                                  "A flavorful and mouthwatering Chinese starter bursting with delectable vegetable goodness.",
                                inStock: 1,
                                isVeg: 1,
                                price: 18000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Breads",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749269",
                                name: "Butter Roti",
                                category: "Breads",
                                description:
                                  "Piping hot and fluffy roti, topped with a dollop of butter!",
                                imageId: "pz1nbkcqggxldjk0xym2",
                                inStock: 1,
                                isVeg: 1,
                                price: 2200,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.5",
                                    ratingCount: "80 ratings",
                                    ratingCountV2: "80",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749271",
                                name: "Butter Naan",
                                category: "Breads",
                                description:
                                  "A yummy and soft naan topped with a dollop of butter, serves as the perfect side!",
                                imageId: "zmlmkfhh4sgcbuvlcwh3",
                                inStock: 1,
                                isVeg: 1,
                                price: 5000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "47 ratings",
                                    ratingCountV2: "47",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "104120432",
                                name: "Lachha Paratha ",
                                category: "Breads",
                                description:
                                  "Serves 1 | This laccha paratha is the perfect side for all dishes!",
                                inStock: 1,
                                isVeg: 1,
                                price: 5000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "83326385",
                                name: "Tawa Roti Plain",
                                category: "Breads",
                                description:
                                  "Piping hot and fluffy roti that serves as the best side for any dish!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/ad756f32-9e79-422b-9b46-cce71686952c_abde3d29-025a-4c48-8c65-46c168a123b8.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 1700,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "5.0",
                                    ratingCount: "7 ratings",
                                    ratingCountV2: "7",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182177",
                                name: "Tandoori Roti",
                                category: "Breads",
                                description:
                                  "Super soft roti that is cooked to perfection in a tandoor.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/5834a02b-0741-465d-8f9f-031b65d895f4_63718942-617b-42dc-8700-9aed784ed1ef.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 1700,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.7",
                                    ratingCount: "9 ratings",
                                    ratingCountV2: "9",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "104120614",
                                name: "Paneer Kulcha ",
                                category: "Breads",
                                description:
                                  "Serves 1 | A delightfully wholesome combo of paneer kulcha, served along with chana masala, curds, gravy and butter.",
                                inStock: 1,
                                isVeg: 1,
                                price: 8500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.2",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749272",
                                name: "Paneer Stuffed Paratha",
                                category: "Breads",
                                description:
                                  "Deliciously stuffed paratha filled with flavorful paneer, a vegetarian delight perfect for bread lovers.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/087372dd-db36-41ce-a75d-385964681132_3b05688c-075f-4fb4-86c1-9b56062a0cb2.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 8000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.4",
                                    ratingCount: "10 ratings",
                                    ratingCountV2: "10",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "83326387",
                                name: "Stuff Paneer Kulcha",
                                category: "Breads",
                                description:
                                  "A mouthwatering combination of stuffed paneer and soft, flavorful bread.",
                                inStock: 1,
                                isVeg: 1,
                                price: 7200,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.8",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "83326381",
                                name: "Butter Garlic Naan",
                                category: "Breads",
                                description:
                                  "Serves 1 | A Delicious combination of naan topped with garlic pieces and chutney with a smokey flavour",
                                inStock: 1,
                                isVeg: 1,
                                price: 5500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749274",
                                name: "Aloo Stuffed Paratha",
                                category: "Breads",
                                description:
                                  "Deliciously stuffed Indian bread filled with flavorful potato.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/6cb0fd83-5bc0-44ea-9724-d01ca7405036_e6bcc221-b300-46bd-88a0-981cef82579c.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 6500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.7",
                                    ratingCount: "5 ratings",
                                    ratingCountV2: "5",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "104120546",
                                name: "Aloo Kulcha ",
                                category: "Breads",
                                description:
                                  "Serves 1 | A delightfully wholesome combo of aloo kulcha, served along with chana masala, curds, gravy and butter.",
                                inStock: 1,
                                isVeg: 1,
                                price: 5600,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749270",
                                name: "Plain Naan",
                                category: "Breads",
                                description:
                                  "Soft and fluffy naan tastes amazing when paired with a gravy.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/b447cbad-5e7b-419c-ba51-90114d49205c_27d7df64-198a-4691-9d0c-a9fb84a2b6f9.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 3500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.4",
                                    ratingCount: "21 ratings",
                                    ratingCountV2: "21",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "83326383",
                                name: "Tawa Roti Butter",
                                category: "Breads",
                                description:
                                  "Piping hot and fluffy roti with a dollop of butter, that serves as the best side for any dish!",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/69ddb562-150d-4b9b-a2e0-dc4b3595ed99_0ec9d81f-034c-41b7-a3e2-7618f02e7ebb.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 2200,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.9",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "104120752",
                                name: "Missi Roti ",
                                category: "Breads",
                                description:
                                  "Serves 1 | Wholesome and soft roti made from wheat flour, gram flour and seasoned with spices.",
                                inStock: 1,
                                isVeg: 1,
                                price: 5600,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "83326434",
                                name: "Cheese Garlic Naan",
                                category: "Breads",
                                inStock: 1,
                                isVeg: 1,
                                price: 6300,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "104120659",
                                name: "Mix Kulcha ",
                                category: "Breads",
                                description:
                                  "Serves 1 | Traditional and authentic amritsari kulcha bread stuffed with mix masala , baked in tandoor with choice of chole or dal makhani, amul butter, chatori imli pyaz chutney, raita and gud with every kulcha.",
                                inStock: 1,
                                isVeg: 1,
                                price: 8000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "83326430",
                                name: "Stuff Aloo Kulcha",
                                category: "Breads",
                                description:
                                  "Flavorful stuffed Indian bread with a delectable potato filling.",
                                inStock: 1,
                                isVeg: 1,
                                price: 5700,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "104120444",
                                name: "Cheese Garlic Naan ",
                                category: "Breads",
                                description:
                                  "Serves 1 | Indulge in the savory union of warm cheese and aromatic garlic perfectly baked into a delectable naan bread.",
                                inStock: 1,
                                isVeg: 1,
                                price: 6000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749273",
                                name: "Onion Stuffed Paratha",
                                category: "Breads",
                                description:
                                  "A flavorful and savory Indian bread filled with a delightful mixture of onions and spices.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/576aec59-9d81-4ed4-b94d-d01a179b6b58_0a075cd7-c738-4034-92ec-12dbf9d12152.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 6000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "1.1",
                                    ratingCount: "5 ratings",
                                    ratingCountV2: "5",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749275",
                                name: "Mix Veg Stuffed Paratha",
                                category: "Breads",
                                description:
                                  "Deliciously stuffed paratha with a mix of flavorful vegetables.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/bd2025bb-9e96-4024-954e-addc4730b340_99e7ccff-3cf2-453c-85c0-2f9f3cce5934.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 8000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.9",
                                    ratingCount: "6 ratings",
                                    ratingCountV2: "6",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182187",
                                name: "Kashmiri Naan",
                                category: "Breads",
                                description:
                                  "A slightly sweet naan with cashew, almond, coconut stuffing, perfect for gravy or with pickles.",
                                inStock: 1,
                                isVeg: 1,
                                price: 7900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749276",
                                name: "Garlic Naan",
                                category: "Breads",
                                description:
                                  "North Indian bread with a rich undertone of garlic that tastes brilliant when paired with a gravy.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/470b64ed-202a-4ba1-af9a-e92b33ac76c5_568548fc-dfd8-43d0-aeb7-b07d285cd8ae.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 7500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "5.0",
                                    ratingCount: "7 ratings",
                                    ratingCountV2: "7",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749277",
                                name: "Missi Roti",
                                category: "Breads",
                                description:
                                  "Wholesome and soft roti made from wheat flour, gram flour and seasoned with spices.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/2d385dd5-a10f-41dd-a164-ece0732cbf25_c71a82da-16cb-4d98-ae9b-0072c0adebc7.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 5500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.4",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749278",
                                name: "Laccha Paratha",
                                category: "Breads",
                                description:
                                  "Multi-layered flatbread made with wheat and plain flour.",
                                inStock: 1,
                                isVeg: 1,
                                price: 5000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.9",
                                    ratingCount: "17 ratings",
                                    ratingCountV2: "17",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Veg Main Course",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749217",
                                name: "Mushroom Masala",
                                category: "Veg Main Course",
                                description:
                                  "Try this delicious masala dish made of healthy and mouth-watering mushrooms.",
                                imageId: "dibnbo2dksvis4lnyrkq",
                                inStock: 1,
                                isVeg: 1,
                                price: 27500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749223",
                                name: "Mushroom Do Pyaza",
                                category: "Veg Main Course",
                                description:
                                  "Dig into this scrumptious curry of Mushroom, sliced onions are pan-fried with spices and crushed tomatoes that you cant resist!",
                                imageId: "t7vdk48dzmv1ssdlgan3",
                                inStock: 1,
                                isVeg: 1,
                                price: 27000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182233",
                                name: "Mushroom mtr masala  Full",
                                category: "Veg Main Course",
                                description:
                                  "A vegetarian delight, Mushroom MTR Masala Full offers a mouthwatering medley of flavors that will leave you wanting more.",
                                inStock: 1,
                                isVeg: 1,
                                price: 27000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182220",
                                name: "Mix Veg",
                                category: "Veg Main Course",
                                description:
                                  "Enjoy this delicious assortment of veggies prepared with fresh spices.",
                                imageId: "iaofvvno0qckqjstptfr",
                                inStock: 1,
                                isVeg: 1,
                                price: 22500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182223",
                                name: "Aloo Gobi Matar",
                                category: "Veg Main Course",
                                description:
                                  "A delightful and flavorful medley of potatoes, cauliflower, and peas, perfect for a satisfying vegetarian main course.",
                                inStock: 1,
                                isVeg: 1,
                                price: 18500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749204",
                                name: "Aloo Jeera",
                                category: "Veg Main Course",
                                description:
                                  "Serves 1 | A flavourful Indian side dish having sauteed potatoes tossed with cumin and several other Indian spices.",
                                imageId: "dmz3ihx85rjgkfhsibjy",
                                inStock: 1,
                                isVeg: 1,
                                price: 16500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749206",
                                name: "Veg Jaipuri",
                                category: "Veg Main Course",
                                description:
                                  "Curry made of mixed vegetables, paneer cubes in a tomato based gravy.",
                                inStock: 1,
                                isVeg: 1,
                                price: 23000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182235",
                                name: "Mushroom Tikka Masala",
                                category: "Veg Main Course",
                                description:
                                  "Mushroom cooked in simple tomato onion gravy and spices packed with lots of flavours",
                                inStock: 1,
                                isVeg: 1,
                                price: 27000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749209",
                                name: "Veg Kolhapuri",
                                category: "Veg Main Course",
                                description:
                                  "Veg Kolhapuri is a Maharashtrian dish,consisting of mixed vegetables in a thick, spiced gravy (Serves 2 people).",
                                inStock: 1,
                                isVeg: 1,
                                price: 22500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749211",
                                name: "Banarasi Aloo Dum",
                                category: "Veg Main Course",
                                description:
                                  "Baby potatoes sauteed between spices and herbs, giving a satiating aroma all around.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/96e96622-11b7-45f6-9ae8-6b9635d855a2_7a7643b8-3961-4739-8344-957d31705e43.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 24000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.0",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182224",
                                name: "Kashmiri Aloo Dum",
                                category: "Veg Main Course",
                                description:
                                  "A mouthwatering vegetarian main course from the stunning region of Kashmir, showcasing the rich flavors of slow-cooked potatoes in a delightful aromatic gravy.",
                                imageId: "bcvs9ukusbknf9tn7qvd",
                                inStock: 1,
                                isVeg: 1,
                                price: 25000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749214",
                                name: "Veg Kofta",
                                category: "Veg Main Course",
                                description:
                                  "A Curry Made Of Fried Vegetable Koftas Soaked In A Creamy, Delicious Gravy And Cooked For Authentic Taste.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/6536051f-4aa5-471d-aafc-74c22dd7931c_744c0e7c-e824-45e5-abad-db6cb941f1cf.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 26000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.8",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182228",
                                name: "Mushroom  - Chilly",
                                category: "Veg Main Course",
                                description:
                                  "Indulge in a delectable blend of savory mushrooms with a tantalizing burst of flavors.",
                                inStock: 1,
                                isVeg: 1,
                                price: 26000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182230",
                                name: "Mushroom Do Pyaza Full",
                                category: "Veg Main Course",
                                description:
                                  "A delectable and flavorful mushroom dish perfect for satisfying your taste buds.",
                                inStock: 1,
                                isVeg: 1,
                                price: 24000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182231",
                                name: "Mushroom mtr masala Half",
                                category: "Veg Main Course",
                                description:
                                  "A delectable and flavorful dish loaded with tender mushrooms, perfect for a satisfying veg main course.",
                                inStock: 1,
                                isVeg: 1,
                                price: 16500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749226",
                                name: "Mushroom Tikka Tawa Masala",
                                category: "Veg Main Course",
                                description:
                                  "Delicious & flavorful veg main course featuring succulent mushrooms cooked in a tantalizing tawa masala.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/3ed1e494-9b67-40ec-b642-e49c2a9982a9_10e718de-385e-437d-a474-ca51196949d7.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 28000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "5.0",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Combos",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749143",
                                name: "Veg Fried Rice with Chilli Paneer",
                                category: "Combos",
                                description:
                                  "Serves 1 | A scrumptious combo of flavorful fried rice with assorted veggies served with deliciously fiery chilli paneer.",
                                inStock: 1,
                                isVeg: 1,
                                price: 22000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.8",
                                    ratingCount: "16 ratings",
                                    ratingCountV2: "16",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749142",
                                name: "Veg Fried Rice with Veg Manchurian",
                                category: "Combos",
                                description:
                                  "A scrumptious combo of hearty veg fried rice served with hot and fiery veg Manchurian.",
                                inStock: 1,
                                isVeg: 1,
                                price: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.9",
                                    ratingCount: "15 ratings",
                                    ratingCountV2: "15",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182118",
                                name: "Veg Manchurian Gravy With Btr Naan 2pc",
                                category: "Combos",
                                inStock: 1,
                                isVeg: 1,
                                price: 21000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182116",
                                name: "Paneer Chilli Gravy With Btr Roti 2pc",
                                category: "Combos",
                                inStock: 1,
                                isVeg: 1,
                                price: 20000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182106",
                                name: "Veg Noddles with Veg Manchurian",
                                category: "Combos",
                                inStock: 1,
                                isVeg: 1,
                                price: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.9",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749149",
                                name: "Dal Chawal",
                                category: "Combos",
                                description:
                                  "A thick gravy made from toor dhal, along with some rice.",
                                inStock: 1,
                                isVeg: 1,
                                price: 17000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182123",
                                name: "Aloo Paratha 1pc With Veg Raita",
                                category: "Combos",
                                inStock: 1,
                                isVeg: 1,
                                price: 13000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182111",
                                name: "Indian Meal",
                                category: "Combos",
                                description:
                                  "Paneer Butter Masala + Jeera Rice + 2Pc Butter Naan",
                                inStock: 1,
                                isVeg: 1,
                                price: 22500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.3",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182121",
                                name: "Paneer Paratha 2pc With Plain Curd",
                                category: "Combos",
                                inStock: 1,
                                isVeg: 1,
                                price: 21500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182125",
                                name: "Mushroom Masala With 2pc Tandoori Roti",
                                category: "Combos",
                                inStock: 1,
                                isVeg: 1,
                                price: 21000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Snacks",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182238",
                                name: "Chole Bhature",
                                category: "Snacks",
                                description:
                                  "A classic Punjabi combo consisting of fluffy bathura served with thick and indulgent chickpea gravy.",
                                imageId: "izm8nucfzjblemtijqll",
                                inStock: 1,
                                isVeg: 1,
                                price: 17500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.5",
                                    ratingCount: "18 ratings",
                                    ratingCountV2: "18",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182104",
                                name: "Pav Bhaji",
                                category: "Snacks",
                                description:
                                  "A classic North Indian dish with a delicious thick vegetable curry served with pav.",
                                inStock: 1,
                                isVeg: 1,
                                price: 13500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.6",
                                    ratingCount: "8 ratings",
                                    ratingCountV2: "8",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182240",
                                name: "Chole Kulcha pc with chola",
                                category: "Snacks",
                                inStock: 1,
                                isVeg: 1,
                                price: 22000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182232",
                                name: "Finger Chips",
                                category: "Snacks",
                                description:
                                  "Serves 1 | Deep-fried potato Fingers, best had with some tangy tomato ketchup in a French Tradition.",
                                inStock: 1,
                                isVeg: 1,
                                price: 13000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182248",
                                name: "Paneer Burger",
                                category: "Snacks",
                                description:
                                  "Stacked high with delectable sauces and vegetables, this Paneer burger is packed with delicious flavour",
                                inStock: 1,
                                isVeg: 1,
                                price: 12000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182247",
                                name: "Cheese Burger",
                                category: "Snacks",
                                description:
                                  "Juicy and indulgent burger with crumb-fried cheese burst patty, served with lettuce, tomatoes, chopped onions, mayo and crisps.",
                                inStock: 1,
                                isVeg: 1,
                                price: 10000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.9",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182245",
                                name: "Veg Burger",
                                category: "Snacks",
                                description:
                                  "Juicy burger with a tangy vegetable patty; served with lettuce, tomatoes, chopped onions, mayo and crisps.",
                                inStock: 1,
                                isVeg: 1,
                                price: 8000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182241",
                                name: "Chola Bhature with 1 Extra Bhatura",
                                category: "Snacks",
                                inStock: 1,
                                isVeg: 1,
                                price: 23000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "1.5",
                                    ratingCount: "7 ratings",
                                    ratingCountV2: "7",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749309",
                                name: "Veg Pakora",
                                category: "Snacks",
                                description:
                                  "Deep fried fritters (pakora) dunked in sour curd and besan curry tempered with whole spices, asafoetida and red chilli.",
                                inStock: 1,
                                isVeg: 1,
                                price: 17500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749310",
                                name: "Paneer Pakora",
                                category: "Snacks",
                                description:
                                  "Super-soft paneer dunked in a seasoned gram flour batter and fried to golden perfection; served with dip.",
                                inStock: 1,
                                isVeg: 1,
                                price: 22000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "5.0",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "INDIAN THALI ",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "76363475",
                                name: "Chinese Thali                          ",
                                category: "INDIAN THALI ",
                                description:
                                  "Paneer Chilli Dry + Veg Manchurian Gravy + Veg Noodle + 2Pc Butter Naan + Salad + Sweet + Veg Fried Rice + Achar",
                                inStock: 1,
                                isVeg: 1,
                                price: 35000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.5",
                                    ratingCount: "6 ratings",
                                    ratingCountV2: "6",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "76363474",
                                name: "Maharaja Thali                         ",
                                category: "INDIAN THALI ",
                                description:
                                  "Paneer Butter Masala + Veg Kofta + Dal Fry + Matter Pulao + 2 Butter Naan + Sweet + Salad + Papad + Achar",
                                inStock: 1,
                                isVeg: 1,
                                price: 34000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "76363472",
                                name: "Special Thali                   ",
                                category: "INDIAN THALI ",
                                description:
                                  "Handi Paneer + Mix Veg + Dal Fry + 2 Butter Roti + Salad + Sweet + Papad + Veg Pulao + Achar",
                                inStock: 1,
                                isVeg: 1,
                                price: 28000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.2",
                                    ratingCount: "25 ratings",
                                    ratingCountV2: "25",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "76361779",
                                name: "Regular Thali                     ",
                                category: "INDIAN THALI ",
                                description:
                                  "Serves 1 | Mix Veg + Dal Fry + Plain Rice + 2 Roti + Salad + Achar",
                                inStock: 1,
                                isVeg: 1,
                                price: 23000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "New Startup Pizza & Pasta",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182163",
                                name: "Paneer Tikka Pizza",
                                category: "New Startup Pizza & Pasta",
                                description:
                                  "A well baked pizza filled with paneer tikka and topped with eons of cheese.",
                                inStock: 1,
                                isVeg: 1,
                                price: 26500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182151",
                                name: "Cheese Pizza",
                                category: "New Startup Pizza & Pasta",
                                description:
                                  "A fresh flattened bread dough generously layered with grated cheese,vegetables & italian herbs baked to perfection.",
                                imageId: "enoz43rf8voksaztuoom",
                                inStock: 1,
                                isVeg: 1,
                                price: 14900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.1",
                                    ratingCount: "19 ratings",
                                    ratingCountV2: "19",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182166",
                                name: "Paneer Chilli Pizza",
                                category: "New Startup Pizza & Pasta",
                                inStock: 1,
                                isVeg: 1,
                                price: 24900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "7 ratings",
                                    ratingCountV2: "7",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182148",
                                name: "White Souce Pasta",
                                category: "New Startup Pizza & Pasta",
                                description:
                                  "It is simply cooked pasta mixed with a silky smooth & decadent white sauce made of milk, butter and flour.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/db0aca4a-0ae3-456a-afe5-8df978d0c62c_d3840e21-cf33-4b4e-bd02-ffccbefbe6c6.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 19000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.4",
                                    ratingCount: "5 ratings",
                                    ratingCountV2: "5",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182154",
                                name: "Onion Tomato Capsicum Pizza",
                                category: "New Startup Pizza & Pasta",
                                description:
                                  "A delectable combination of onions, tomatoes, and capsicum on a crispy pizza crust.",
                                inStock: 1,
                                isVeg: 1,
                                price: 20000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182147",
                                name: "Red Souce Pasta",
                                category: "New Startup Pizza & Pasta",
                                description:
                                  "Serves 1 | A delectable veg pasta coated in a tantalizing red sauce that will satisfy all your cravings.",
                                inStock: 1,
                                isVeg: 1,
                                price: 17000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182156",
                                name: "Tomato Potato Pizza",
                                category: "New Startup Pizza & Pasta",
                                description:
                                  "A delightful combination of savory flavors, this veggie pizza boasts a tantalizing blend of tomato and potato, perfect for any pizza lover's palate.",
                                inStock: 1,
                                isVeg: 1,
                                price: 19000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182160",
                                name: "Tomato Pizza",
                                category: "New Startup Pizza & Pasta",
                                description:
                                  "A fresh flattened bread dough topped with tomato, generously layered with grated cheese & italian herbs baked to perfection.",
                                inStock: 1,
                                isVeg: 1,
                                price: 17500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182169",
                                name: "Mushroom Pizza",
                                category: "New Startup Pizza & Pasta",
                                description:
                                  "Scrumtiously baked pizza topped with mushroom and drizzled with cheese.",
                                inStock: 1,
                                isVeg: 1,
                                price: 22000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182172",
                                name: "Extra Cheese",
                                category: "New Startup Pizza & Pasta",
                                description: "Extra cheesy goodness!",
                                inStock: 1,
                                isVeg: 1,
                                price: 5000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Rice and Biryani",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182216",
                                name: "Mushroom Biryani",
                                category: "Rice and Biryani",
                                description:
                                  "Slow-cooked rice and meaty mushrooms slow cooked in a perfect blend Indian masala seasoned with whole spices.",
                                inStock: 1,
                                isVeg: 1,
                                price: 23500,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "146049497",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "62171374",
                                        name: "Boondi Raita//",
                                        price: 8900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "62171380",
                                        name: "Boondi Raita",
                                        price: 8900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "146049498",
                                    groupName: "Desserts",
                                    choices: [
                                      {
                                        id: "62171379",
                                        name: "Gulan Jamun",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182214",
                                name: "Paneer spl  Biryani",
                                category: "Rice and Biryani",
                                description:
                                  "A flavorful and aromatic rice dish showcasing the rich and creamy paneer, combining fragrant spices for a tantalizing experience.",
                                inStock: 1,
                                isVeg: 1,
                                price: 24000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "146049495",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "62171380",
                                        name: "Boondi Raita",
                                        price: 8900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "62171374",
                                        name: "Boondi Raita//",
                                        price: 8900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "146049496",
                                    groupName: "Desserts",
                                    choices: [
                                      {
                                        id: "62171379",
                                        name: "Gulan Jamun",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749283",
                                name: "Veg Biryani",
                                category: "Rice and Biryani",
                                description:
                                  "A flavorful combination of rice and assorted veggies cooked in a fragrant and flavorful masala seasoned with Indian whole spices.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/568028ec-58ed-41d5-9af5-8a3db8214a2e_7d74ea3b-0743-426e-93aa-7d2ae9922f96.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 22000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "146049492",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "62171374",
                                        name: "Boondi Raita//",
                                        price: 8900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "62171380",
                                        name: "Boondi Raita",
                                        price: 8900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "146049493",
                                    groupName: "Desserts",
                                    choices: [
                                      {
                                        id: "62171379",
                                        name: "Gulan Jamun",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "1.3",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182207",
                                name: "JEERA RICE  Full",
                                category: "Rice and Biryani",
                                description:
                                  "Aromatic and flavorful rice dish seasoned with cumin, perfect companion to any Indian meal.",
                                inStock: 1,
                                isVeg: 1,
                                price: 14900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "146049485",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "62171380",
                                        name: "Boondi Raita",
                                        price: 8900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "62171374",
                                        name: "Boondi Raita//",
                                        price: 8900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "146049486",
                                    groupName: "Desserts",
                                    choices: [
                                      {
                                        id: "62171379",
                                        name: "Gulan Jamun",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182200",
                                name: "STM RICE Full",
                                category: "Rice and Biryani",
                                description:
                                  "A flavorful and aromatic rice dish filled with an abundance of delectable vegetables.",
                                inStock: 1,
                                isVeg: 1,
                                price: 13500,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "146049479",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "62171380",
                                        name: "Boondi Raita",
                                        price: 8900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "62171374",
                                        name: "Boondi Raita//",
                                        price: 8900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "146049480",
                                    groupName: "Desserts",
                                    choices: [
                                      {
                                        id: "62171379",
                                        name: "Gulan Jamun",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182203",
                                name: "JEERA RICE Half",
                                category: "Rice and Biryani",
                                description:
                                  "Aromatic rice cooked in a tempering of cumin and whole spices.",
                                inStock: 1,
                                isVeg: 1,
                                price: 9000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "146049482",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "62171374",
                                        name: "Boondi Raita//",
                                        price: 8900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "62171380",
                                        name: "Boondi Raita",
                                        price: 8900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "146049483",
                                    groupName: "Desserts",
                                    choices: [
                                      {
                                        id: "62171379",
                                        name: "Gulan Jamun",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749281",
                                name: "Veg Pulao",
                                category: "Rice and Biryani",
                                description:
                                  "A wholesome dish prepared by cooking chopped vegetables and rice in a flavorful Indian masala.",
                                inStock: 1,
                                isVeg: 1,
                                price: 18000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "146049487",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "62171374",
                                        name: "Boondi Raita//",
                                        price: 8900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "62171380",
                                        name: "Boondi Raita",
                                        price: 8900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "146049488",
                                    groupName: "Desserts",
                                    choices: [
                                      {
                                        id: "62171379",
                                        name: "Gulan Jamun",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "5.0",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182210",
                                name: "Matar Pulao",
                                category: "Rice and Biryani",
                                description:
                                  "A wholesome dish prepared by cooking green peas and rice in a flavorful Indian masala served with raita.",
                                inStock: 1,
                                isVeg: 1,
                                price: 17500,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "146049490",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "62171374",
                                        name: "Boondi Raita//",
                                        price: 8900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "62171380",
                                        name: "Boondi Raita",
                                        price: 8900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "146049491",
                                    groupName: "Desserts",
                                    choices: [
                                      {
                                        id: "62171379",
                                        name: "Gulan Jamun",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749284",
                                name: "Hyderabadi Biryani",
                                category: "Rice and Biryani",
                                description:
                                  "Nutritious biriyani, layered with select spices and packed with vegetables; served along with wholesome raita.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/d1b22b92-5eab-4ef1-a565-c63059274e8d_34e70290-5b4b-4af3-b80a-4567c2ff376a.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 22000,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "77124489",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "62171380",
                                        name: "Boondi Raita",
                                        price: 8900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "62171374",
                                        name: "Boondi Raita//",
                                        price: 8900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "77124490",
                                    groupName: "Desserts",
                                    choices: [
                                      {
                                        id: "62171379",
                                        name: "Gulan Jamun",
                                        price: 4000,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.8",
                                    ratingCount: "6 ratings",
                                    ratingCountV2: "6",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Fried Rice",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749286",
                                name: "Schezwan Fried Rice",
                                category: "Fried Rice",
                                description:
                                  "A flavor-packed dish with aromatic rice tossed along with veggies and Schezwan sauce - perfect to accompany any side dish.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/eb918126-519e-4051-9a51-60f7188d517d_09189661-24ba-4800-a417-3972d5953eae.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 18500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "5 ratings",
                                    ratingCountV2: "5",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182131",
                                name: "PANEER FRIED RICE Full",
                                category: "Fried Rice",
                                description:
                                  "A delectable combination of tender paneer and savory fried rice that will leave your taste buds satisfied and craving for more.",
                                inStock: 1,
                                isVeg: 1,
                                price: 22000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182108",
                                name: "VEG FRIED RICE Full",
                                category: "Fried Rice",
                                description:
                                  "Delight in a flavorful medley of vegetables infused in savory fried rice goodness.",
                                imageId: "kboxb4hqqjlblaned4uf",
                                inStock: 1,
                                isVeg: 1,
                                price: 17000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "7 ratings",
                                    ratingCountV2: "7",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749287",
                                name: "Mushroom Fried Rice",
                                category: "Fried Rice",
                                description:
                                  "Fresh veggies and mushoorm tossed in a pan with steamed rice and flavorful sauces and spices.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/5967ff38-c49f-4db3-b802-4fc50f6c64fc_3cc2b8fb-a706-482c-b363-6915779d3a11.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749290",
                                name: "Green Peas Fried Rice",
                                category: "Fried Rice",
                                description:
                                  "A delectable blend of fluffy rice and delicate green peas, this mouthwatering veggie dish is bursting with savory flavors.",
                                inStock: 1,
                                isVeg: 1,
                                price: 18000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749289",
                                name: "Mix Fried Rice",
                                category: "Fried Rice",
                                description:
                                  "Dig into this delicious fried rice with chicken and veggies that you just cant resist!",
                                inStock: 1,
                                isVeg: 1,
                                price: 23500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Desserts",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182141",
                                name: "Chocolate Ice Cream",
                                category: "Desserts",
                                description:
                                  "A delightfully creamy and rich ice cream, flavored with smooth chocolate - perfect to satisfy your sweet tooth.",
                                inStock: 1,
                                isVeg: 1,
                                price: 6700,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.5",
                                    ratingCount: "9 ratings",
                                    ratingCountV2: "9",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182145",
                                name: "Butterscotch Ice Cream",
                                category: "Desserts",
                                description:
                                  "Creamy butterscotch ice cream with bits of crunchy praline in it.",
                                inStock: 1,
                                isVeg: 1,
                                price: 5900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.7",
                                    ratingCount: "6 ratings",
                                    ratingCountV2: "6",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182127",
                                name: "Gulan Jamun",
                                category: "Desserts",
                                description:
                                  "Experience the sweet taste of traditional Indian dessert, bursting with flavors and a delicate texture.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/cac5c5e1-cfa4-483a-ac5c-c28dccb6bb1a_fecf180d-59eb-4e61-bce8-0d3e4dd34485.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 4000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.7",
                                    ratingCount: "5 ratings",
                                    ratingCountV2: "5",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182167",
                                name: "Vanilla Ice Cream",
                                category: "Desserts",
                                description:
                                  "Vanilla ice cream is created by cooling a mixture made of cream, sugar, and vanilla above a container of ice and salt.",
                                inStock: 1,
                                isVeg: 1,
                                price: 5500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "1.3",
                                    ratingCount: "7 ratings",
                                    ratingCountV2: "7",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749137",
                                name: "Rasgulla",
                                category: "Desserts",
                                description:
                                  "A melt-in-the-mouth dessert made from cottage cheese balls soaked in a sugary syrup.",
                                inStock: 1,
                                isVeg: 1,
                                price: 4000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "1.3",
                                    ratingCount: "10 ratings",
                                    ratingCountV2: "10",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Dal Main Course",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749229",
                                name: "Yellow Dal Fry",
                                category: "Dal Main Course",
                                description:
                                  "Serves 1 | Enjoy this classic preparation of dal which is an all time favourite.",
                                imageId: "smkxehchquge2yrfzqip",
                                inStock: 1,
                                isVeg: 1,
                                price: 16000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.9",
                                    ratingCount: "11 ratings",
                                    ratingCountV2: "11",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749235",
                                name: "Dal Makhani",
                                category: "Dal Main Course",
                                description:
                                  "A decadently indulgent dish prepared by cooking black lentil and red kidney beans in a cream and butter based gravy.",
                                imageId: "hct8w1thnqqjtdvtrhyu",
                                inStock: 1,
                                isVeg: 1,
                                price: 19500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "5.0",
                                    ratingCount: "10 ratings",
                                    ratingCountV2: "10",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749232",
                                name: "Yellow Dal Tadka",
                                category: "Dal Main Course",
                                description:
                                  "Dal tadka is a north Indian(Punjabi style) dal (lentil) recipe made from chana dal & gets its distinct taste from a flavorful & aromatic tempering of ghee, cumin seeds, hing (asafetida) & red chillies.",
                                imageId: "vrurmwpl651dcjrneklm",
                                inStock: 1,
                                isVeg: 1,
                                price: 18000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.5",
                                    ratingCount: "7 ratings",
                                    ratingCountV2: "7",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Noodles",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182146",
                                name: "Veg Noodles",
                                category: "Noodles",
                                description:
                                  "Serves 1 | A deliciously aromatic and flavorful dish made from perfectly cooked noodles and stir-fried vegetables.",
                                imageId: "sydltf3jyw9n0boonceq",
                                inStock: 1,
                                isVeg: 1,
                                price: 17500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.3",
                                    ratingCount: "12 ratings",
                                    ratingCountV2: "12",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749292",
                                name: "Veg Hakka Noodles",
                                category: "Noodles",
                                description:
                                  "A delectable dish with slippery strands of noodles dressed in a flavorful sauce and tossed along with veggies and spices.",
                                imageId: "qcfqeejlawtgzam1plmf",
                                inStock: 1,
                                isVeg: 1,
                                price: 19000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "27 ratings",
                                    ratingCountV2: "27",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182161",
                                name: "Chilly Garlic Noodles",
                                category: "Noodles",
                                description:
                                  "It is a simple yet flavourful recipe where noodles are stir-fried along with dry chilies, garlic, ginger and lots of vegetables.Served wit Salad Try it and it will surely satisfy your taste buds.",
                                inStock: 1,
                                isVeg: 1,
                                price: 18000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749294",
                                name: "Singapore Noodles",
                                category: "Noodles",
                                description:
                                  "A Singaporean delicacy with soft and tender noodles tossed in a sweet and spicy sauce.",
                                inStock: 1,
                                isVeg: 1,
                                price: 18000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749295",
                                name: "Schezwan Noodles",
                                category: "Noodles",
                                description:
                                  "Vegetables and soft noodles that is tossed with vegetables in a flavorful schezwan sauce.",
                                inStock: 1,
                                isVeg: 1,
                                price: 18500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749296",
                                name: "Paneer Noodles",
                                category: "Noodles",
                                description:
                                  "A delightfully delicious combo of paneer noodles served with gobi Manchurian and refreshing soda.",
                                imageId: "lcnea4ivhgwgavg5dzpy",
                                inStock: 1,
                                isVeg: 1,
                                price: 21000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.1",
                                    ratingCount: "15 ratings",
                                    ratingCountV2: "15",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749297",
                                name: "Mix Veg Noodles",
                                category: "Noodles",
                                description:
                                  "A deliciously aromatic and flavorful dish made from perfectly cooked noodles and stir-fried vegetables.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/3450e076-fd9a-4e53-bdb8-f09beeae3605_f922f8de-d73b-47c8-a80f-c5ec6c7bd49c.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 22000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.9",
                                    ratingCount: "5 ratings",
                                    ratingCountV2: "5",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182184",
                                name: "Veg Chopsuey",
                                category: "Noodles",
                                description:
                                  "A delicious dish served in a thick, sweet and sour, starch-based chinese vegetable sauce with crispy fried noodles cooked to perfection.",
                                inStock: 1,
                                isVeg: 1,
                                price: 18900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182188",
                                name: "Chinese Chopsuey",
                                category: "Noodles",
                                description:
                                  "A delicious dish served in a thick, sweet and sour, starch-based vegetable sauce with juicy chicken bits and crispy fried noodles.",
                                inStock: 1,
                                isVeg: 1,
                                price: 18900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Beverages",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182183",
                                name: "Cold Coffee with Ice Cream",
                                category: "Beverages",
                                description:
                                  "A toothsome combo with delectable cold coffee with creamy ice cream - perfect to satiate your cravings.",
                                inStock: 1,
                                isVeg: 1,
                                price: 14500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182191",
                                name: "Sweet Lassi",
                                category: "Beverages",
                                description:
                                  "A creamy and wholesome drink straight from the Punjabi kitchen made from yogurt flavored with sugar.",
                                inStock: 1,
                                isVeg: 1,
                                price: 12000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.5",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182215",
                                name: "Salt Lassi",
                                category: "Beverages",
                                description:
                                  "Yoghurt based drink with a pinch of black salt and cumin.",
                                inStock: 1,
                                isVeg: 1,
                                price: 11000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Salad & Papad",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182199",
                                name: "Masala Papad",
                                category: "Salad & Papad",
                                description:
                                  "Dig into this dish for a masaledaar twist on the classic papad!",
                                inStock: 1,
                                isVeg: 1,
                                price: 8000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749180",
                                name: "Green Salad",
                                category: "Salad & Papad",
                                description:
                                  "Serves 1 | Healthy green salad made from slices of garden fresh greens.",
                                inStock: 1,
                                isVeg: 1,
                                price: 11500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749183",
                                name: "Onion Salad",
                                category: "Salad & Papad",
                                description: "A salad made from onions.",
                                inStock: 1,
                                isVeg: 1,
                                price: 7000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182194",
                                name: "Fry Papad",
                                category: "Salad & Papad",
                                description:
                                  "Crisp and flavorful, this veggie delight combines the crunch of papad with a delightful mix of fresh vegetables.",
                                inStock: 1,
                                isVeg: 1,
                                price: 4000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182196",
                                name: "Dry Papad",
                                category: "Salad & Papad",
                                description:
                                  "Crispy papad topped with flavorful seasonings and a delightful crunch, perfect for a refreshing salad.",
                                inStock: 1,
                                isVeg: 1,
                                price: 4000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Soups",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749165",
                                name: "Veg Noodles Soup",
                                category: "Soups",
                                description:
                                  "Serves 1 | A warm and comforting bowl of hearty and flavorful noodles in a wholesome vegetable broth.",
                                inStock: 1,
                                isVeg: 1,
                                price: 12000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749175",
                                name: "Cream of Tomato Soup",
                                category: "Soups",
                                description:
                                  "A indulging soup that is packed with the tanginess and goodness of tomatoes.",
                                inStock: 1,
                                isVeg: 1,
                                price: 12000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749167",
                                name: "Veg Hot and Sour Soup",
                                category: "Soups",
                                description:
                                  "Hot and sour soup as the name suggests is a spicy and tangy soup that is loaded with vegetables.",
                                inStock: 1,
                                isVeg: 1,
                                price: 13000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182189",
                                name: "Veg Sweet Courn Soup",
                                category: "Soups",
                                inStock: 1,
                                isVeg: 1,
                                price: 12500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749170",
                                name: "Veg Manchow Soup",
                                category: "Soups",
                                description:
                                  "A delicious hot and spicy, thick soup made from mixed vegetables and topped with fried noodles.",
                                imageId:
                                  "FOOD_CATALOG/IMAGES/CMS/2024/6/4/e89c4481-33d9-4d45-a831-bf56b9573978_72ebbc1b-6107-4a0c-9ddf-3674d9544ced.JPG",
                                inStock: 1,
                                isVeg: 1,
                                price: 13000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.8",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182185",
                                name: "Veg Lemon Coriander Soup",
                                category: "Soups",
                                description:
                                  "Assorted veggies simmered in a coriander broth flavored with lemon and other herbs.",
                                inStock: 1,
                                isVeg: 1,
                                price: 12500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Tandoor Starters",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749201",
                                name: "Paneer Tikka",
                                category: "Tandoor Starters",
                                description:
                                  "Serves 1 | Soft paneer cubes marinated in a seasoned masala and cooked in a tandoor.",
                                inStock: 1,
                                isVeg: 1,
                                price: 28500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182204",
                                name: "Achari Paneer Tikka",
                                category: "Tandoor Starters",
                                description:
                                  "Soft paneer cubes marinated in a seasoned achari masala and cooked in a tandoor - perfect to satiate your cravings.",
                                inStock: 1,
                                isVeg: 1,
                                price: 29000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182209",
                                name: "Paneer Malai Tikka",
                                category: "Tandoor Starters",
                                description:
                                  "A creamy dish with soft paneer chunks cooked in a rich tomato gravy seasoned with spices and butter.",
                                inStock: 1,
                                isVeg: 1,
                                price: 29000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182219",
                                name: "Mushroom Tikka",
                                category: "Tandoor Starters",
                                description:
                                  "A decadently indulgent dish prepared by cooking black lentil and red kidney beans in a cream and butter based gravy.",
                                inStock: 1,
                                isVeg: 1,
                                price: 28000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Accompaniments",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749129",
                                name: "Plain Curd",
                                category: "Accompaniments",
                                description:
                                  "Serves 1 | Curd/plain yogurt or dahi is a dairy product obtained by curdling milk with an edible acidic substance such as curd itself, lemon juice or vinegar.",
                                inStock: 1,
                                isVeg: 1,
                                price: 8000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749131",
                                name: "Boondi Raita",
                                category: "Accompaniments",
                                description:
                                  "A lip-smacking yoghurt made with crunchy boondi!",
                                inStock: 1,
                                isVeg: 1,
                                price: 11000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "41749133",
                                name: "Veg Raita",
                                category: "Accompaniments",
                                description:
                                  "A flavorful complementary side dish made of yoghurt with assorted veggies. Can be served with everything.",
                                inStock: 1,
                                isVeg: 1,
                                price: 9900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Christmas Gifting",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "130551844",
                                name: "Veg Uttapam                                                ",
                                category: "Christmas Gifting",
                                description:
                                  "A pancake made from rice flour to which onion and other veggies are added during cooking. Served with",
                                inStock: 1,
                                isVeg: 1,
                                price: 14000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Paratha",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "66182128",
                                name: "Paneer Paratha 2pc With  Curd",
                                category: "Paratha",
                                description: "Serves 1",
                                inStock: 1,
                                isVeg: 1,
                                price: 22500,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "146043619",
                                    groupName: "Accompaniments",
                                    choices: [
                                      {
                                        id: "62171380",
                                        name: "Boondi Raita",
                                        price: 8900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "63895721",
                                        name: "Plain Curd",
                                        price: 6900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                  {
                                    groupId: "146043620",
                                    groupName: "Desserts",
                                    choices: [
                                      {
                                        id: "62171381",
                                        name: "Ras Malai",
                                        price: 5500,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: -1,
                                    maxFreeAddons: -1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                  portionSize: "Serves 1",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                        type: "FSSAI",
                        imageId: "fssai_final_edss9i",
                        text: ["License No. 12719039000040"],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                        name: "Manokamana Foods",
                        area: "Subhash Nagar",
                        completeAddress:
                          "952,GT ROAD SUBHASH NAGAR MUGHALSARAI",
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      ],
      firstOffsetRequest: true,
      isQCLink: false,
    },
    tid: "cfa9ad2c-1a15-4f93-b69a-9d19e33bb6fc",
    sid: "f0m2f692-8d92-4f66-902e-cd8dbdc0256c",
    deviceId: "877005da-8d2d-2661-b5ec-803bb5863b34",
    csrfToken: "kV8hbdP9YFKc-HOLMYz6CoaL7oIQJF7FmiYjqCuE",
  },
];
