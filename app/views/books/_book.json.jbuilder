json.extract! book, :id, :isbn, :title, :price, :published, :dl, :created_at, :updated_at
json.url book_url(book, format: :json)