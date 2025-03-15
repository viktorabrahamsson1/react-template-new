RegisterCommand("openui", function()
  SetNuiFocus(true, true)
  SendNUIMessage({
    type = "openUI"
  })
end, false)
