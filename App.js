import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Home from './icon/home-active.png';
import Order from './icon/order.png';
import Help from './icon/help.png';
import Inbox from './icon/inbox.png';
import Akun from './icon/account.png';
import Search from './icon/search.png';
import Promo from './icon/promo.png';
import Gopay from './icon/gopay.png';
import Pay from './icon/pay.png';
import Nearby from './icon/nearby.png';
import Topup from './icon/topup.png';
import More from './icon/more.png';
import Goride from './icon/go-ride.png';
import Gocar from './icon/go-car.png';
import Goblue from './icon/go-bluebird.png';
import Gosend from './icon/go-send.png';
import Godeal from './icon/go-deals.png';
import Gopulsa from './icon/go-pulsa.png';
import Gofood from './icon/go-food.png';
import Gomore from './icon/go-more.png';
import Sepakbola from './dummy/dummy/sepak-bola.jpg';
import Food from './dummy/dummy/food-banner.jpg';
import Imggojek from './logo/logo/gojek.png';
import Facebookconnect from './dummy/dummy/facebook-connect.png';
import Gofood2 from './logo/logo/go-food.png';
import Foodkfc from './dummy/dummy/go-food-kfc.jpg';
import Foodgm from './dummy/dummy/go-food-gm.jpg';
import Foodbanka from './dummy/dummy/go-food-banka.jpg';
import Foodpakbos from './dummy/dummy/go-food-pak-boss.jpg';
import Foodorins from './dummy/dummy/go-food-orins.jpg';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex: 1, backgroundColor: 'white'}}>
            {/* Search */}
            <View style={{marginHorizontal: 17, flexDirection: 'row'}}>
              <View style={{position: 'relative', flex: 1, paddingTop: 15}}>
                <TextInput
                  placeholder="Ingin Makan Siapa?"
                  style={{
                    borderWidth: 1,
                    borderColor: '#E8E8E8',
                    borderRadius: 25,
                    height: 47,
                    fontSize: 13,
                    paddingLeft: 50,
                    backgroundColor: 'white',
                    marginRight: 10,
                  }}
                />
                <Image
                  source={Search}
                  style={{position: 'absolute', top: 27, left: 10}}></Image>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                }}>
                <Image source={Promo}></Image>
              </View>
            </View>
            {/* endSearch */}
            <View>
              <View style={{marginHorizontal: 17, marginTop: 8}}>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#2c5fbb',
                    justifyContent: 'space-between',
                    padding: 14,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                  }}>
                  <Image source={Gopay}></Image>
                  <Text
                    style={{
                      color: '#E8E8E8',
                      fontSize: 17,
                      fontWeight: 'bold',
                    }}>
                    Rp.999.999.999.9
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#2F65BD',
                    paddingTop: 20,
                    paddingBottom: 14,
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={Pay}></Image>
                    <Text
                      style={{
                        color: '#E8E8E8',
                        fontSize: 13,
                        fontWeight: 'bold',
                        marginTop: 15,
                      }}>
                      Pay
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={Nearby}></Image>
                    <Text
                      style={{
                        color: '#E8E8E8',
                        fontSize: 13,
                        fontWeight: 'bold',
                        marginTop: 15,
                      }}>
                      Nearby
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={Topup}></Image>
                    <Text
                      style={{
                        color: '#E8E8E8',
                        fontSize: 13,
                        fontWeight: 'bold',
                        marginTop: 15,
                      }}>
                      Top Up
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={More}></Image>
                    <Text
                      style={{
                        color: '#E8E8E8',
                        fontSize: 13,
                        fontWeight: 'bold',
                        marginTop: 15,
                      }}>
                      More
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            {/* content */}
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginHorizontal: 0,
                marginTop: 18,
              }}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  width: '100%',
                  marginBottom: 18,
                }}>
                <View
                  style={{
                    width: '25%',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: 58,
                      borderWidth: 1,
                      borderColor: '#E8E8E8',
                      width: 58,
                      borderRadius: 18,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image source={Goride}></Image>
                  </View>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 6,
                    }}>
                    GO-RIDE
                  </Text>
                </View>
                <View
                  style={{
                    width: '25%',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: 58,
                      borderWidth: 1,
                      borderColor: '#E8E8E8',
                      width: 58,
                      borderRadius: 18,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image source={Gocar}></Image>
                  </View>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 6,
                    }}>
                    GO-CAR
                  </Text>
                </View>
                <View
                  style={{
                    width: '25%',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: 58,
                      borderWidth: 1,
                      borderColor: '#E8E8E8',
                      width: 58,
                      borderRadius: 18,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image source={Goblue}></Image>
                  </View>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 6,
                    }}>
                    GO-BLUEBIRD
                  </Text>
                </View>
                <View
                  style={{
                    width: '25%',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: 58,
                      borderWidth: 1,
                      borderColor: '#E8E8E8',
                      width: 58,
                      borderRadius: 18,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image source={Gosend}></Image>
                  </View>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 6,
                    }}>
                    GO-SEND
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <View
                  style={{
                    width: '25%',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: 58,
                      borderWidth: 1,
                      borderColor: '#E8E8E8',
                      width: 58,
                      borderRadius: 18,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image source={Godeal}></Image>
                  </View>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 6,
                    }}>
                    GO-DEALS
                  </Text>
                </View>
                <View
                  style={{
                    width: '25%',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: 58,
                      borderWidth: 1,
                      borderColor: '#E8E8E8',
                      width: 58,
                      borderRadius: 18,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image source={Gopulsa}></Image>
                  </View>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 6,
                    }}>
                    GO-PULSA
                  </Text>
                </View>
                <View
                  style={{
                    width: '25%',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: 58,
                      borderWidth: 1,
                      borderColor: '#E8E8E8',
                      width: 58,
                      borderRadius: 18,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image source={Gofood}></Image>
                  </View>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 6,
                    }}>
                    GO-FOOD
                  </Text>
                </View>
                <View
                  style={{
                    width: '25%',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: 58,
                      borderWidth: 1,
                      borderColor: '#E8E8E8',
                      width: 58,
                      borderRadius: 18,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image source={Gomore}></Image>
                  </View>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 6,
                    }}>
                    MORE
                  </Text>
                </View>
              </View>
            </View>
            {/* line grey */}
            <View
              style={{
                backgroundColor: '#f2f2f4',
                height: 17,
                marginTop: 20,
              }}></View>

            {/* news section */}
            <View style={{paddingTop: 16, paddingHorizontal: 16}}>
              <View>
                <Image
                  source={Sepakbola}
                  style={{height: 170, width: '100%', borderRadius: 6}}></Image>
              </View>
              <View style={{paddingTop: 16, paddingBottom: 20}}>
                <Text
                  style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>
                  GO-NEWS
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: '#7A7A7A',
                  }}>
                  Kevin membawa bola sambil makan dan minum di lapangan
                </Text>
              </View>
              <View style={{flex: 1, paddingLeft: 220}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#61A756',
                    paddingHorizontal: 12,
                    paddingVertical: 11,
                    width: 100,
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: 'bold',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    Read
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                paddingTop: 16,
                paddingBottom: 20,
                borderColor: '#E8E8E8',
                borderBottomWidth: 1,
              }}></View>
            {/* internal information */}
            <View style={{marginHorizontal: 16}}>
              <View>
                <View
                  style={{
                    height: 15,
                    width: 60,
                    marginTop: 15,
                  }}>
                  <Image style={{width: undefined}} source={Imggojek}></Image>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#1C1C1C',
                  marginTop: 10,
                  marginBottom: 20,
                }}>
                Complete your profile
              </Text>
              <View flexDirection="row">
                <View>
                  <Image source={Facebookconnect}></Image>
                </View>
                <View style={{marginLeft: 16, flex: 1}}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: '#4A4A4A',
                    }}>
                    Connect with Facebook
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: '#4A4A4A',
                    }}>
                    Log in faster without verification code
                  </Text>
                </View>
              </View>
              <View style={{flex: 1, paddingLeft: 220}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#61A756',
                    paddingHorizontal: 12,
                    paddingVertical: 11,
                    width: 100,
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: 'bold',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    Connect
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  paddingTop: 16,
                  borderColor: '#E8E8E8',
                  borderBottomWidth: 1,
                }}></View>
            </View>
            <View style={{paddingTop: 16, paddingHorizontal: 16}}>
              <View>
                <Image
                  source={Food}
                  style={{height: 170, width: '100%', borderRadius: 6}}></Image>
              </View>
              <View style={{paddingTop: 16, paddingBottom: 20}}>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#1C1C1C',
                    }}>
                    GO-NEWS
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'normal',
                      color: '#7A7A7A',
                    }}>
                    Quick , before they run out!
                  </Text>
                </View>
                {/* line grey */}
                <View
                  style={{
                    backgroundColor: '#f2f2f4',
                    height: 1,
                    marginTop: 20,
                  }}></View>
              </View>
            </View>
            {/* Nearby Go-food */}
            <View>
              <View style={{height: 15, width: 60, marginLeft: 16}}>
                <Image source={Gofood2}></Image>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 16,
                  paddingHorizontal: 16,
                }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: '#1C1C1C',
                  }}>
                  Nearby Restaurants
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: '#61A756',
                  }}>
                  See All
                </Text>
              </View>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                style={{flexDirection: 'row', paddingLeft: 16}}>
                <View style={{marginRight: 16}}>
                  <View
                    style={{
                      width: 150,
                      height: 150,
                    }}>
                    <Image
                      source={Foodkfc}
                      style={{
                        height: undefined,
                        width: undefined,
                        resizeMode: 'cover',
                        flex: 1,
                        borderRadius: 10,
                      }}></Image>
                  </View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#1C1C1C',
                      marginTop: 12,
                      textAlign: 'center',
                    }}>
                    KFC Wak Udin
                  </Text>
                </View>
                <View style={{marginRight: 16}}>
                  <View
                    style={{
                      width: 150,
                      height: 150,
                    }}>
                    <Image
                      source={Foodbanka}
                      style={{
                        height: undefined,
                        width: undefined,
                        resizeMode: 'cover',
                        flex: 1,
                        borderRadius: 10,
                      }}></Image>
                  </View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#1C1C1C',
                      marginTop: 12,
                      textAlign: 'center',
                    }}>
                    Kebab Benyamin 99
                  </Text>
                </View>
                <View style={{marginRight: 16}}>
                  <View
                    style={{
                      width: 150,
                      height: 150,
                    }}>
                    <Image
                      source={Foodgm}
                      style={{
                        height: undefined,
                        width: undefined,
                        resizeMode: 'cover',
                        flex: 1,
                        borderRadius: 10,
                      }}></Image>
                  </View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#1C1C1C',
                      marginTop: 12,
                      textAlign: 'center',
                    }}>
                    Bakmie Pak Somad
                  </Text>
                </View>
                <View style={{marginRight: 16}}>
                  <View
                    style={{
                      width: 150,
                      height: 150,
                    }}>
                    <Image
                      source={Foodorins}
                      style={{
                        height: undefined,
                        width: undefined,
                        resizeMode: 'cover',
                        flex: 1,
                        borderRadius: 10,
                      }}></Image>
                  </View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#1C1C1C',
                      marginTop: 12,
                      textAlign: 'center',
                    }}>
                    Orins Super Pedass 88
                  </Text>
                </View>
                <View style={{marginRight: 16}}>
                  <View
                    style={{
                      width: 150,
                      height: 150,
                    }}>
                    <Image
                      source={Foodpakbos}
                      style={{
                        height: undefined,
                        width: undefined,
                        resizeMode: 'cover',
                        flex: 1,
                        borderRadius: 10,
                      }}></Image>
                  </View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#1C1C1C',
                      marginTop: 12,
                      textAlign: 'center',
                    }}>
                    Mantap pak boss
                  </Text>
                </View>
              </ScrollView>
              {/* line grey */}
              <View
                style={{
                  backgroundColor: '#f2f2f4',
                  height: 1,
                  marginTop: 20,
                }}></View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            height: 50,
            flexDirection: 'row',
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image style={{width: 26, height: 26}} source={Home}></Image>
            <Text
              style={{
                fontSize: 10,
                color: '#545454',
                marginTop: 4,
                color: '#43AB4A',
              }}>
              Home
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image style={{width: 26, height: 26}} source={Order}></Image>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Orders
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image style={{width: 26, height: 26}} source={Help}></Image>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Help
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image style={{width: 26, height: 26}} source={Inbox}></Image>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Inbox
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image style={{width: 26, height: 26}} source={Akun}></Image>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Akun
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default App;
