class TrailsController < ApplicationController

  def new

  end

  def create
    trail = Trail.create(trail_params)
    render :json => trail.to_json
  end

  private
  def trail_params
    attributes = params.require(:trail).permit(:title, :description, :state, :creator)
    coordinates = {coords: arrayify(params.require(:trail).require(:coords))}
    attributes.merge(coordinates)
  end

  def arrayify(hash)
    array = []
    hash.each {|index, coordinates| array[index.to_i] = coordinates}
    array
  end
end

