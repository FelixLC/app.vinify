class MixpanelMock
  track: () ->
    console.log("mixpanel.track", arguments)
  identify: () ->
    console.log("mixpanel.identify", arguments)
  alias: () ->
    console.log("mixpanel.alias", arguments)
  people:
    set: () ->
      console.log("mixpanel.set", arguments)
    track_charge: () ->
      console.log("mixpanel.track_charge", arguments)


window.mixpanel = new MixpanelMock()