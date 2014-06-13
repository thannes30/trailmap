class TrailsController < ApplicationController

  def new

  end

  def create
    trail = Trail.create(trail_params)
    # respond_to do |format|
    #   format.json {:json => trail.to_json}
    # end
    render :json => trail.to_json
  end

  private
  def trail_params
    params.require(:trail).permit(:title, :description, :state, :creator, :coords)
  end
end
