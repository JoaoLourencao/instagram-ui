import { LinearGradient } from "expo-linear-gradient";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Bookmark from "../../assets/Bookmark.svg";
import Comment from "../../assets/Comment.svg";
import Heart from "../../assets/Heart.svg";
import Share from "../../assets/Share.svg";
import ene from "../../assets/ene.png";
import foto from "../../assets/foto.png";
import foto3 from "../../assets/foto3.png";
import foto4 from "../../assets/foto4.png";
import Logo from "../../assets/logo.svg";
import Message from "../../assets/message.svg";
import Points from "../../assets/points.svg";
import postEne from "../../assets/postene.png";
import Stroke from "../../assets/stroke.svg";
import terson from "../../assets/terson.png";

const DATA = [
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
    name: "Seu Story"
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: terson,
    name: "ene.terson"
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto3,
    name: "ene.biano"
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto4,
    name: "ene.tulio"
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
    name: "ene.thalles"
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
    name: "ene.amanda"
  },
];

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo width={127} height={49} />
        <View style={styles.headerOptions}>
          <Stroke />
          <Message />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <View style={styles.stores}>
          <FlatList
            data={DATA}
            horizontal={true}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
              <View style={styles.storesContainer}>
                <LinearGradient
                  colors={["#D52865", "#F7B55A"]}
                  style={styles.storesCard}
                  key={item.item.id}
                >
                  <Image
                    style={styles.storesCardImage}
                    source={item.item.pathURL}
                  />
                </LinearGradient>
                <Text style={styles.storesCardText}>{item.item.name}</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={ene}
              />
              <Text style={styles.contentHeaderLeftText}>enesolucoes</Text>
            </View>
            <Points />
          </View>
          <View style={styles.contentImage}>
            <Image source={postEne} style={{ width: "100%", height: "100%" }} />
          </View>

          <View style={styles.contentFooter}>
            <View style={styles.contentFooterOptions}>
              <View style={styles.contentFooterOptionsButton}>
                <Heart />
                <Comment />
                <Share />
              </View>
              <Bookmark />
            </View>

            <View style={styles.contentFooterTexts}>
              <Text
                style={[styles.contentFooterText1, styles.contentFooterText]}
              >
                Conte com um time de desenvolvimento multidisciplinar, que utiliza a metodologia ágil para entregar projetos de forma rápida, flexível, econômica e inovadora, e tenha mais tempo para focar no seu core-business.                </Text>
              <Text
                style={[styles.contentFooterText2, styles.contentFooterText]}
              >
                View all 3 comments
              </Text>
              <Text
                style={[styles.contentFooterText3, styles.contentFooterText]}
              >
                3 hours ago See Translation
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={foto}
              />
              <Text style={styles.contentHeaderLeftText}>joaolourencaoo</Text>
            </View>
            <Points />
          </View>
          <View style={styles.contentImage}>
            <Image source={foto} style={{ width: "100%", height: "100%" }} />
          </View>

          <View style={styles.contentFooter}>
            <View style={styles.contentFooterOptions}>
              <View style={styles.contentFooterOptionsButton}>
                <Heart />
                <Comment />
                <Share />
              </View>
              <Bookmark />
            </View>

            <View style={styles.contentFooterTexts}>
              <Text
                style={[styles.contentFooterText1, styles.contentFooterText]}
              >
                🚀🚀💫
              </Text>
              <Text
                style={[styles.contentFooterText2, styles.contentFooterText]}
              >
                View all 3 comments
              </Text>
              <Text
                style={[styles.contentFooterText3, styles.contentFooterText]}
              >
                3 hours ago See Translation
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 56,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 50,
  },
  headerOptions: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 20,
  },
  stores: {
    height: 110,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingVertical: 10,
  },
  storesContainer: {
    textAlign: "center",
    alignItems: "center",
    marginRight: 14,
  },
  storesCard: {
    borderRadius: 50,
  },
  storesCardImage: {
    width: 64,
    height: 64,
    borderRadius: 50,
    margin: 2,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    paddingLeft: 20
  },
  storesCardText: {
    color: "#fff",
    fontSize: 11,
    marginTop: 3,
    fontWeight: "bold",
  },
  content: {
    width: "100%",
    marginBottom: 20,
  },
  contentHeader: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  contentHeaderLeft: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  contentHeaderLeftImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  contentHeaderLeftText: {
    color: "#fff",
  },
  contentImage: {
    width: "100%",
    height: 400,
  },
  contentFooter: {},
  contentFooterOptions: {
    height: 40,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentFooterOptionsButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  contentFooterText: {
    color: "#fff",
  },
  contentFooterTexts: {
    paddingLeft: 20,
    gap: 10,
  },
  contentFooterText1: {
    fontSize: 14,
  },

  contentFooterText2: {
    fontSize: 14,
  },
  contentFooterText3: {
    fontSize: 10,
  },
});
