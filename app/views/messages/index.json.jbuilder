json.array! @messages do |message|
  json.id message.id
  json.name message.user.name
  json.text message.text
  json.image_url  message.image.url
  json.date message.created_at
end
