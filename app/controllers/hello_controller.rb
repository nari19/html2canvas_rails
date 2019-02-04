class HelloController < ApplicationController
  def index
    # @hoge=> インスタンス変数   hoge=> ローカル変数
    @time = Time.current.in_time_zone('Asia/Tokyo')
  end
end
