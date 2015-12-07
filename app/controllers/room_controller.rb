class RoomController < ApplicationController
  layout :room_layout

  def index
    @room = Room.find(1)
  end

  def show
    @room = Room.find(params[:id])
    render 'show'
  end

  private

  def room_layout
    if @room.id == 1
      "room_one"
    else
      "room_two"
    end
  end
end
