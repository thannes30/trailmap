class TrailsController < ApplicationController

  def index
    @trails = Trail.all
    render :json => @trails.to_json(include: :favorites)
    # render :json => @trails.to_json
  end

  def new

  end

  def favorite
    favorite = Favorite.new
    current_user.favorites << favorite
    Trail.find(params[:id]).favorites << favorite
    favorite.save
    render :json => favorite.to_json
  end

  def create
    trail = Trail.create(trail_params)
    ### trail does not have a user id before being created... this gives it one.
    current_user.trails << trail
    render :json => trail.to_json
  end

  private
  def trail_params
    attributes = params.require(:trail).permit(:title, :description, :state)
    coordinates = {coords: arrayify(params.require(:trail).require(:coords))}
    attributes.merge(coordinates)

  end

  def arrayify(hash)
    array = []
    hash.each {|index, coordinates| array[index.to_i] = coordinates}
    array
  end
end

