json.array!(@articles) do |article|
  json.extract! article, :id, :title, :maintext
  json.url article_url(article, format: :json)
end
