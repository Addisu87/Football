import { SafeAreaView, View } from "react-native";
import React from "react";
import WebView from "react-native-webview";

const StandingsWidget = () => {
  const embedCode = `
  <div id="wg-api-football-standings"
    data-host="v3.football.api-sports.io"
    data-key="95f8210a47b0bc73dcba2614e4c2cb9f"
    data-league="39"
    data-season="2022"
    data-theme=""
    data-refresh="15"
    data-show-errors="true"
    data-show-logos="true"
    class="wg_loader"
  ></div>
  <script
    type="module"
    src="https://widgets.api-sports.io/2.0.3/widgets.js"
  ></script>
  `;

  return (
    <SafeAreaView className="flex-1">
      <WebView source={{ html: embedCode }} javaScriptEnabled={true} />
    </SafeAreaView>
  );
};

StandingsWidget.displayName = "StandingsWidget";
export default { StandingsWidget };
