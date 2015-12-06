class RoomController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  def index
    @room = Room.find(1)
  end

  def show
    @room = Room.find(params[:id])
    render 'show'
  end
end
